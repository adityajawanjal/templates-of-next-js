import { checkAuth } from "@/helpers";

export default async function handler(req, res) {
    if(req.cookies.token){
        const user = await checkAuth(req,res);
        res.status(200).json(user);
    }else{
        res.status(400).json({err:"NO user"})
    }
}
