import connectDB from "@/db/conn";
import User from "@/models/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export default async function handler(req, res) {
  await connectDB();
  if (req.method === "POST") {
    try {
      const { name, email, password, pic } = req.body;
      if (!name || !email || !password) {
        res.status(400).json("All fields required");
      }
      const userExists = await User.findOne({ email: email });
      if (userExists) {
        res.status(400).json("User Already Exist.");
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({
        name: name,
        email: email,
        password: hashedPassword,
        pic: pic,
      });
      const result = await user.save();
      if (result) {
        const token = jwt.sign({ token: result._id }, process.env.JWT_SECRET, {
          expiresIn: "30d",
        });
        const cookie = serialize("token", token, {
          httpOnly: true,
          maxAge:60*60*24,
          path:"/",
          sameSite:true
        });
        res.setHeader("Set-Cookie", cookie);
        res.status(201).json({
          message: "Registration Successfull."
        });
      }
    } catch (err) {
      res.status(400).json(err);
    }
  }
}
