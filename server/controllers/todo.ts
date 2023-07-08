import { Request, Response } from "express";
import { todosDB } from "../db/db";

export const todoController = {
  getMany: (req: Request, res: Response) => {
    const todos = todosDB.getMany();
    return res.json({ todos });
  },

  getOne: async (req: Request, res: Response) => {
    const id = req.params.id;
    console.log("getOne ", id);
    const todo = todosDB.findOneById(id);
    return res.json({ todo });
  },

  add: async (req: Request, res: Response) => {
    const todo = req.body;
    todosDB.add(todo);

    const todos = todosDB.getMany();
    return res.json({ todos });
  },

  edit: async (req: Request, res: Response) => {
    const id = req.params.id;
    const todo = req.body;

    const isExist = todosDB.findOneById(id);
    if (!isExist) return res.json({ message: "This todo does not exist" });

    todosDB.update({ ...todo, id });

    const todos = todosDB.getMany();
    return res.json({ todos });
  },

  markAsDone: async (req: Request, res: Response) => {
    const id = req.params.id;
    const todo = todosDB.findOneById(id);

    if (!todo) return res.json({ message: "This todo does not exist" });
    todosDB.update({ ...todo, isDone: !todo?.isDone });

    const todos = todosDB.getMany();
    return res.json({ todos });
  },

  delete: async (req: Request, res: Response) => {
    const id = req.params.id;
    todosDB.delete(id);

    const todos = todosDB.getMany();
    return res.json({ todos });
  },
};
