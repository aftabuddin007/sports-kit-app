import { dbConnect } from "@/app/lib/dbConnect"

export async function POST(request){
    const newProd = await request.json()
    const addProdRes = await dbConnect ('addProduct')
    const res = await addProdRes.insertOne(newProd)
    return Response.json({res,message:"added successful"})




}





export async function GET(request){
    const addProdRes = await dbConnect("addProduct")
    const addProd = await addProdRes.find({}).toArray()
    return Response.json({addProd,message:"add is working"})}
