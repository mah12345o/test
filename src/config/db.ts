import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGO_URI;
        if (!mongoUri) {
            throw new Error("MONGO_URI is not defined in environment variables");
        }

        await mongoose.connect(mongoUri);

        console.log("MongoDB Connected Successfully");
    } catch (error) {
        if (error instanceof Error) {
            console.error("MongoDB Connection Failed:", error.message);
        } else {
            console.error("MongoDB Connection Failed:", error);
        }
        process.exit(1);
    }
};

export default connectDB;
