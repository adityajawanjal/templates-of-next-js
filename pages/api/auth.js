import { checkAuth } from "@/helpers";

export default function handler(req, res) {
  const data = checkAuth(req);
  res.json({
    mydata: req.user,
  });
}
