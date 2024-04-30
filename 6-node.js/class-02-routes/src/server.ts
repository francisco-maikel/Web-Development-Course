import express from "express";
import "dotenv/config";
import { router } from "./routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(router);

app.listen(PORT, () => {
    console.log(`Serveris running on PORT ${PORT}...`);
});