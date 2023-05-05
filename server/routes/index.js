const { Router } = require("express");
const route = Router();
const TodoController = require("../controllers/TodoController");

route.get("/", (req, res) => {
  res.json({
    message: "Home Page",
  });
});

route.get("/todos", TodoController.getTodos);
route.post("/todos/create", TodoController.create);
route.delete("/todos/delete/:id", TodoController.delete);
route.put("/todos/update/:id", TodoController.update);

module.exports = route;
