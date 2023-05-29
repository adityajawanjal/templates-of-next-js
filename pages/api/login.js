import connectDB from "@/db/conn";
import User from "@/models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  await connectDB();
  if (req.method === "POST") {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        res.status(400).json("Email and Password are required !");
      } else {
        const emailExists = await User.findOne({ email: email });
        if (!emailExists) {
          res.status(400).json("You need to register.");
        } else {
          const matchedPassword = await bcrypt.compare(
            password,
            emailExists.password
          );
          if (!matchedPassword) {
            res.status(400).json("Incorrect Password !");
          } else {
            const token = jwt.sign(
              { id: emailExists._id },
              process.env.JWT_SECRET,
              { expiresIn: "30d" }
            );
            res.status(201).json(token);
          }
        }
      }
    } catch (err) {
      res.status(400).json(`The error in login.js is :  ${err}`);
    }
  } else {
    res.status(400).json("No method detected");
  }
}
