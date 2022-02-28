import express from "express";
import morgan from "morgan";
import router from "./Router/routers";

const GIT_LOCAL_PATH = "js-study-api";
const app = express();
const logger = morgan("dev");

app.use(logger);
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(`/${GIT_LOCAL_PATH}`, router);

export default app;
