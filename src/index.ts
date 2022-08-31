import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import battleRouter from "./routes/battleRouter";

const app = express();

app.use(cors(), express.json());
app.use(battleRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});