import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "utils/mongodb";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { db } = await connectToDatabase();

    if (req.method === "GET") {
        try {
            const data = await db.collection("Todos").find({}).toArray();
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json({ message: "Unable to fetch the data." });
        }
    }
    if (req.method === "POST") {
        try {
            const userInfo = req.body;
            const data = await db.collection("Todos").insertOne(userInfo);
            res.status(201).json(data);
        } catch (err) {
            res.status(500).json({ message: "Unable to insert the data." });
        }
    }

    if (req.method === "PUT") {
        try {
            // To add custom lists
            if (req.body.type === "ADD_LIST") {
                const { _id, createdAt, listName } = req.body;

                const data = await db.collection("Todos").updateOne(
                    { _id: _id },
                    {
                        $addToSet: {
                            customList: {
                                _id: new ObjectId(),
                                listName: listName,
                                createdAt: createdAt,
                            },
                        },
                    }
                );

                res.status(201).json(data);
            }

            // To remove custom lists
            if (req.body.type === "REMOVE_LIST") {
                const { uid, id } = req.body;

                const data = await db
                    .collection("Todos")
                    .updateOne(
                        { _id: uid },
                        { $pull: { customList: { _id: new ObjectId(id) } } }
                    );

                res.status(204).json(data);
            }

            const { _id, id, change } = req.body;

            let set = `settings.$[el].${id}`;

            const data = await db
                .collection("Todos")
                .updateOne(
                    { _id: _id },
                    { $set: { [set]: change } },
                    { arrayFilters: [{ "el._id": id }] }
                );
            res.status(204).json(data);
        } catch (err) {
            res.status(500).json({ message: "Unable to instert the data." });
        }
    }
}
