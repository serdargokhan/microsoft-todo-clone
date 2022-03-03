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
            console.log(err);
            res.status(500).json({ message: "Unable to fetch the data." });
        }
    }
    if (req.method === "POST") {
        try {
            const userInfo = req.body;
            const data = await db.collection("Todos").insertOne(userInfo);
            res.status(201).json(data);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Unable to insert the data." });
        }
    }
}
