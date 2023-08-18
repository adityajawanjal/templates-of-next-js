import User from "@/models/user-model";
import jwt from "jsonwebtoken";

export async function checkAuth(req, res) {
  if (req.cookies.token) {
    const decode = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
    if (decode) {
      const id = decode.token;
      const userExist = await User.findById(id).select("name email pic role");
      if (userExist) {
        return userExist;
      } else {
        return null;
      }
    } else {
      return res.status(400).json("Error in Verification.");
    }
  }
}
