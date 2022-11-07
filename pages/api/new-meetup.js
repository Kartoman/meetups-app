import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    //   const { title, image, address, description } = data;

    const client = await MongoClient.connect(process.env.MONGOBD_URL);
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    return res.status(201).json({ message: "Meetup inserted!" });
  }
  return res.status(400).json({ message: "Only except post request" });
}
