import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import process from "process"
import helmet from "helmet";
import morgan from "morgan";

dotenv.config();
export const app = express();

const port = process.env.API_PORT;

// Middlewares
app.use(cors());
app.use(helmet())
app.use(morgan("dev"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",(req: Request, res: Response, next: NextFunction) => {
        res.send("ECOM server started!");
    }
);

export const startEcomService = () => {
    return new Promise<void>((resolve)=>{
        app.listen(2020, () => {
            console.log(`ECOM Server is running at port: ${2020}`);
            resolve()
        });
    })
} 
