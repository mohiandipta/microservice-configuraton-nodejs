import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import process from "process"
import helmet from "helmet";
import morgan from "morgan";

dotenv.config();
const app = express();

const port = process.env.API_PORT || 4040;

// Middlewares
app.use(cors());
app.use(helmet())
app.use(morgan("dev"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("ecom server started!");
}
);

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});