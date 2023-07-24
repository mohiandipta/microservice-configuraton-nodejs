import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { startEcomService } from "./ecom";
import { startBicycleService } from "./bicycle";
import bodyParser from "body-parser";
import cors from "cors";
import process from "process"
import helmet from "helmet";
import morgan from "morgan";

dotenv.config();
const app = express();

const port = process.env.API_PORT;

// Middlewares
app.use(cors());
app.use(helmet())
app.use(morgan("dev"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("Gateway Server Started!");
}
);


startBicycleService()
startEcomService()

