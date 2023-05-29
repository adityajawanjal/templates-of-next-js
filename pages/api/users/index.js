import connectDB from "@/db/conn";
import User from "@/models/user";

export default async function handler(req, res) {
  await connectDB();
  if (req.method === "GET") {
    try {
      const users = await User.find({}).select("name email pic");
      res.status(200).json(users);
    } catch (err) {
      res.status(400).json(`Error in users : ${err}`);
    }
  }
}
