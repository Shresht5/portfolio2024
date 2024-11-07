import connectMongo from "@/lib/ConnectMongodb";
import messageModel from "@/Models/MessageModel";
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest) => {
    await connectMongo();
    return NextResponse.json({ msg: "success", })

}

export const POST = async (req: NextRequest) => {
    await connectMongo();
    const { Uemail, Umessage } = await req.json();
    try {
        const message = messageModel.create({ Uemail, Umessage });
        return NextResponse.json({ success: true, message: "message recieved" })
    } catch (err) {
        return NextResponse.json({ succcess: false, message: "failed to sent" })
    }

}