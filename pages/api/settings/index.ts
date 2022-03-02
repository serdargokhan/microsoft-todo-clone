import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "utils/mongodb";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { db } = await connectToDatabase();

    if (req.method === "GET") {
        const data = await db.collection("Settings").find({}).toArray();
        res.status(200).json(data);
    }

    if (req.method === "PUT") {
        const item = req.body;
        const id = item.id;
        const change = item.change;

        const update: any = { $set: {} };
        update.$set[id] = change;

        await db.collection("Settings").updateOne({ _id: id }, update);
    }
}
