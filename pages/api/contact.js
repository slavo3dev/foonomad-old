import { MongoClient } from "mongodb";

export default async function hendler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = JSON.parse(req.body);

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.send(422).json({ meesage: "Invalid Input" });
      return;
    }

    const newMessage = {
      email,
      message,
      name,
    };

    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://slavo3:Smimicom24011bg@mimicom24.wbdvr.mongodb.net/foonomaddb?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true },
      );
    } catch (err) {
      res.status(500).json({ message: "Didnt connect to DB" + err });
      return;
    }

    const db = client.db();

    try {
      const result = await db
        .collection("messages")
        .insertOne(newMessage);

      newMessage.id = result.insertedId;
    } catch (err) {
      client.close();
      res.send(500).json({ message: `Error: ${err}` });
    }

    client.close();

    res.status(201).json({
      message: "Successfully Stored Message",
    });
  }
}