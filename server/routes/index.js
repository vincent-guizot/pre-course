const { Router } = require("express");
const route = Router();
const TodoController = require("../controllers/TodoController");

route.get("/", (req, res) => {
  res.send("Hello, Vincent!");
});

route.get("/todos", TodoController.getTodos);
route.get("/todos/create", TodoController.create);
route.get("/todos/delete", TodoController.delete);
route.get("/todos/update", TodoController.update);


module.exports = route;
