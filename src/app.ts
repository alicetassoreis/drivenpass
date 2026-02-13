import express from "express";
import cors from "cors";
import authRouter from "./routers/authRouter";
import credentialsRouter from "./routers/credentialsRouter";
import healthRouter from "./routers/healthRouter";
import errorHandler from "./middlewares/errorHandlerMiddleware";


const app = express();
app.use(cors());
app.use(express.json());


app.use(healthRouter);
app.use(authRouter);
app.use("/credentials", credentialsRouter);


app.use(errorHandler);


export default app;