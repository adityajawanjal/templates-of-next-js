import connectDB from "@/db/conn";
import User from "@/models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  await connectDB();
  if (req.method === "POST") {
    try {
      let { name, email, password, pic } = req.body;
      if (!email || !password) {
        res.status(400).json(`Email and Password required !`);
      } else {
        const emailExists = await User.findOne({ email: email });
        if (emailExists) {
          res.status(400).json(`Email already registered !`);
        } else {
          let hashedPassword = await bcrypt.hash(password, 10);
          let user = new User({
            name: name,
            email: email,
            password: hashedPassword,
            pic: pic,
          });
          const result = await user.save();
          const token = jwt.sign({ id: result._id }, process.env.JWT_SECRET, {
            expiresIn: "30d",
          });
          res.status(201).json(token);
        }
      }
    } catch (err) {
      res.status(400).json(err);
    }
  } else {
    res.status(400).json("Method not detected");
  }
}
