import mongoose, { InferSchemaType } from "mongoose";

const messageSchema = new mongoose.Schema({
    Uemail: { type: String, },
    Umessage: { type: String, }
}, { timestamps: true });

type MessageT = InferSchemaType<typeof messageSchema>;

const messageModel = mongoose.models.messages || mongoose.model<MessageT>('messages', messageSchema);

export default messageModel;