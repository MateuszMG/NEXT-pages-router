import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { todoRouter } from "./routes/api/todo";
import { analyticRouter } from "./routes/api/analytic";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/images", express.static("public/images"));

app.use("/", (req, res, next) => {
  console.log("/");
  next();
});

app.use(analyticRouter);
app.use(todoRouter);

app.listen(4001, () => {
  console.log("work");
});
