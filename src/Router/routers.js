import express from "express";
import pathList from "./pathList.js";

const router = express.Router();
pathList.forEach(({ pathName: path, params = false, func }) => {
  if (!params) return router.get(`/${path}`, func);
  return router.get(`/${path}/:${params}([0-9]{1,})`, func);
});

export default router;
