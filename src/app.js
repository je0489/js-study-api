import express from "express";
import morgan from "morgan";
import router from "./Router/routers.js";

const app = express();
const logger = morgan("dev");

app.use(logger);
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use("/", router);

export default app;
