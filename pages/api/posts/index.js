import connectDB from "@/db/conn";


export default async function handler (req,res){
    await connectDB();
    if(req.method === "POST"){
        try {
            
        } catch (err) {
            res.status(400).json()
        }
    }
}