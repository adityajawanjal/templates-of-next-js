import connectDB from "@/db/conn";
import User from "@/models/user-model";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  await connectDB();
  if (req.method === "POST") {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        res.status(400).json("All fields are required");
      }
      const userExists = await User.findOne({ email: email });
      if (!userExists) {
        res.status(400).json("Register first.");
      }
      const passwordMatched = await bcrypt.compare(
        password,
        userExists.password
      );
      if (!passwordMatched) {
        res.status(400).json("Invalid Password");
      }
      const token = jwt.sign({ token: userExists._id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      });
      res.status(200).json({token:token,user:{name:userExists.name,email:userExists.email , role:userExists.role}});
    } catch (err) {
      res.status(400).json(err);
    }
  }
}
