import Student from "../../../models/student";
import connectMongo from "../../../db/conn";

export default async function handler(req, res) {
  await connectMongo();
  if (req.method === "POST") {
    try {
      let stud = new Student(req.body);
      let result = await stud.save();
      res.status(200).json(result);
    } catch (err) {
      res.status(400).json(err);
    }
  }
  if (req.method === "GET") {
    try {
      let result = await Student.find({});
      res.status(200).json(result);
    } catch (err) {
      res.status(400).json(err);
    }
  }
  if (req.method === "PUT") {
    try {
      let result = await Student.findByIdAndUpdate(req.query.userId, req.body);
      res.status(200).json("Updated.");
    } catch (err) {
      res.status(400).json(err);
    }
  }
  if (req.method === "DELETE") {
    try {
      let result = await Student.findByIdAndDelete(req.query.userId);
      res.status(200).json("Deleted.");
    } catch (err) {
      res.status(400).json(err);
    }
  }
}
