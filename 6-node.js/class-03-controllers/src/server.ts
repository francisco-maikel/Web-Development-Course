import express from "express";
import "dotenv/config";
import { router } from "./routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(router);

app.listen(3000, () => {
    console.log(`Server is running on PORT ${PORT}...`);
});