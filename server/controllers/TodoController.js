const { Todo } = require("../models");

class TodoController {
  static getTodos(req, res) {
    Todo.findAll()
      .then((todos) => {
        res.json(todos);
      })
      .catch((err) => {
        res.json(err);
      });
  }
  static create(req, res) {
    const { task } = req.body;
    const status = false;

    Todo.create({
      task, status
    })
      .then((todo) => {
        res.json(todo);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  static update(req, res) {
    res.send("Update Todos Pages");
  }

  static delete(req, res) {
    res.send("Delete Todos Pages");
  }
}

module.exports = TodoController;
