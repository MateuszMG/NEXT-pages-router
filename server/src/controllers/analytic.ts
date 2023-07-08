import { Request, Response } from "express";
import { todosDB } from "../db/db";

export const analyticController = {
  add: async (req: Request, res: Response) => {
    // console.log("analytic req.body", req.params);
    // console.log("analytic req.body", req.query);
    // console.log("analytic req.body", req.body);

    return res.json({ message: "Accepted" });
  },
};
