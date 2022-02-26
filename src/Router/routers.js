import express from "express";
import pathList from "./pathList";

const router = express.Router();
pathList.forEach(({ pathName: path, func }) => router.get(`/${path}`, func));

export default router;
