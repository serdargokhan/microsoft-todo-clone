import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "utils/mongodb";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { db } = await connectToDatabase();

    if (req.method === "GET") {
        const data = await db.collection("Todos").find({}).toArray();
        res.status(200).json(data);
    }
    if (req.method === "POST") {
        const settings = req.body;

        await db.collection("Settings").insertMany(settings);
    }
}
