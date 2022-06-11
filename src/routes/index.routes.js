import { Router } from "express";
import {
  renderTask,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  toggleTaskDone,
} from "../controllers/tasks.controller";

const router = Router();
// tasks
router.get("/", renderTask);

router.post("/tasks/add", createTask);

router.get("/tasks/:id/toggleDone", toggleTaskDone);

router.get("/tasks/:id/edit", renderTaskEdit);

router.post("/tasks/:id/edit", editTask);

router.get("/tasks/:id/delete", deleteTask);


// otros grupos de rutas (por ejemplo employees)
//...
export default router;
