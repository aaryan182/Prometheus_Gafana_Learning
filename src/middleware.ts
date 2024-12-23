import { NextFunction, Request, Response } from "express";
import { Counter, Gauge, Histogram } from "prom-client";

let counter = new Counter({
  name: "http_number_of_requests",
  help: "Number of HTTP requests made",
  labelNames: ["route", "method", "status_code"],
});

export const requestCounterMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  counter.inc({
    route: req.path,
    method: req.method,
    status_code: res.statusCode,
  });
  next();
};

const activeUserGauge = new Gauge({
  name: "active_users",
  help: "Number of active users",
});

export const activeUserGaugeMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  activeUserGauge.inc();
  res.on("finish", () => {
    activeUserGauge.dec();
  });
  next();
};

const histogram = new Histogram({
  name: "request_time",
  help: "Time it took for a request to be handled",
  buckets: [0.1, 1, 5, 10, 100, 1000, 3000],
});

export const histogramMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const startTime = Date.now();
  res.on("finish", () => {
    const endTime = Date.now();
    histogram.observe({}, endTime - startTime);
  });
  next();
};
