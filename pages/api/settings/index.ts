import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "utils/mongodb";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { db } = await connectToDatabase();

    if (req.method === "GET") {
        try {
            const data = await db.collection("Settings").find({}).toArray();
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json({ message: "Unable to fetch the data." });
        }
    }

    if (req.method === "PUT") {
        try {
            const item = req.body;
            const id = item.id;
            const change = item.change;

            const update: any = { $set: {} };
            update.$set[id] = change;

            const data = await db
                .collection("Settings")
                .updateOne({ _id: id }, update);
            res.status(201).json(data);
        } catch (err) {
            res.status(500).json({ message: "Unable to instert the data." });
        }
    }
}
