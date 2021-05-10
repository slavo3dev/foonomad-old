export default function hendler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      !name.trim() === "" ||
      !message ||
      !message.trim() === ""
    ) {
      res.send(422).json({ meesage: "Invalid Input" });
      return;
    }

    const newMessage = {
      email,
      message,
      name,
    };

    console.log("New Message: ", newMessage);
    res
      .status(201)
      .json({
        message: "Successfully Stored Message",
        message: newMessage,
      });
  }
}
