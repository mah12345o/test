import express from "express";

import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

//test

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.json({ message: "API is running..." });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is healthy",
        timestamp: new Date().toISOString()
    });
});

const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Server startup failed:", error);
        process.exit(1);
    }
};

startServer();
