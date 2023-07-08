import express from "express";
import { todoController } from "../../controllers/todo";

const router = express.Router();

router.get("/todos", todoController.getMany);
router.post("/todo", todoController.add);

router
  .route("/todo/:id")
  .get(todoController.getOne)
  .put(todoController.edit)
  .patch(todoController.markAsDone)
  .delete(todoController.delete);

export const todoRouter = router;
