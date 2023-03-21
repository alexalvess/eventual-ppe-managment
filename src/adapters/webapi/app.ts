import express from "express";

const app = express();

app.get("/", (_, res) => {
  res.send("Hello ts-node!");
});

export default app;