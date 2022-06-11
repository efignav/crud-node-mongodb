import Task from "../models/Task";

export const renderTask = async (req, res) => {
  // res.send("<h1> Hello world </h1>");
  const tasks = await Task.find().lean();
  // console.log(tasks);
  res.render("index", { tasks: tasks });
};

export const createTask =async (req, res) => {
    try {
      const task = Task(req.body);
      // console.log(task); // task crea un _id
      const taskSaved = await task.save();
      console.log(taskSaved);
      // res.send("<h1> Add task </h1>");
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  };

export const renderTaskEdit =  async (req, res) => {
    try {
      const task = await Task.findById(req.params.id).lean();
      res.render("edit", { task: task });
    } catch (error) {
      console.log(error.message);
    }
  };

export const editTask = async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndUpdate(id, req.body).lean();
    res.redirect("/");
    // console.log(req.body);
    // res.send("received");
  };

export const deleteTask = async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id, req.body).lean();
    res.redirect("/");
  };

export const toggleTaskDone = async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    task.done = !task.done;
    await task.save();
    res.redirect("/");
  };