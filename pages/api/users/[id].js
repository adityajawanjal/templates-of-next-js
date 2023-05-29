import connectDB from "@/db/conn";
import User from "@/models/user";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  await connectDB();

  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const user = await User.findById(id).select("-password");
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json(`The error in get single user is : ${err}`);
    }
  }

  if (req.method === "PUT") {
    try {
      const { name, email, password, pic } = req.body;
      const userExists = await User.findById(id);
      if (!userExists) {
        res.status(400).json("No user found.");
      } else {
        const user = await User.findByIdAndUpdate(
          id,
          {
            name: name ? name : userExists.name,
            email: email ? email : userExists.email,
            pic: pic ? pic : userExists.pic,
            password: password
              ? await bcrypt.hash(password, 10)
              : userExists.password,
          },
          {
            new: true,
          }
        ).select("-password");
        res.status(200).json(user);
      }
    } catch (err) {
      res.status(400).json(`The error in put single user is : ${err}`);
    }
  }

  if (req.method === "DELETE") {
    try {
      const userExists = await User.findById(id);
      if (!userExists) {
        res.status(400).json("No user found.");
      } else {
        await User.findByIdAndDelete(id);
        res.status(200).json("Deleted");
      }
    } catch (err) {
      res.status(400).json(`The error in Delete single user is : ${err}`);
    }
  }
}
