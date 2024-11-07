import mongoose from "mongoose"

const connectMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL as string);
        console.log('mongo connected')
    } catch (err) {
        console.log('Unable to connect to mongodb server', err)
    }
}

export default connectMongo;