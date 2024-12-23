import express from "express";
import {
  activeUserGaugeMiddleware,
  histogramMiddleware,
  requestCounterMiddleware,
} from "./middleware";
import client from "prom-client";

const app = express();
app.use(express.json());
app.use(requestCounterMiddleware);
app.use(activeUserGaugeMiddleware);
app.use(histogramMiddleware);

app.get("/user", (req, res) => {
  res.send({
    name: "John Doe",
    age: 25,
  });
});

app.get("/todos", async (req, res) => {
//   await new Promise((resolve) => setTimeout(resolve, 1000)); // artificial delay
  res.send({
    name: "todos list",
    age: 2532,
  });
});

app.get("/metrics", async (req, res) => {
  const metrics = await client.register.metrics();
  console.log(metrics);
  res.set("Content-Type", client.register.contentType);
  res.end(metrics);
});

app.listen(3000);
