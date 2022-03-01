import { Db, MongoClient } from "mongodb";

const URI =
    "mongodb+srv://serdargokhan:ABVBGsm5@todoapp.onamy.mongodb.net/MicrosoftTodo?retryWrites=true&w=majority";

let cachedClient: null | MongoClient = null;
let cachedDb: null | Db = null;

export default async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        return {
            client: cachedClient,
            db: cachedDb,
        };
    }

    let client = new MongoClient(URI);
    await client.connect();
    let db = client.db("MicrosoftTodo");

    cachedClient = client;
    cachedDb = db;

    return {
        client: cachedClient,
        db: cachedDb,
    };
}
