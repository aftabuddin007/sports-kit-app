import { dbConnect } from "@/app/lib/dbConnect"
import { ObjectId } from "mongodb"

export async function GET(request,{params}){
    const {id}=await params
    const addProdRes = await dbConnect ('addProduct')
        const addProd = await addProdRes.findOne({_id:new ObjectId(id)})
    return Response.json({addProd,message:"add is working"})}