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
      task,
      status,
    })
      .then((todo) => {
        res.json(todo);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  static update(req, res) {
    const id = +req.params.id;
    const { task, status } = req.body;

    Todo.update(
      {
        task,
        status,
      },
      {
        where: { id },
      }
    ).then((result) => {
      if (result[0] === 1) {
        res.json({
          message: "Task has been updated.",
        });
      } else {
        res.json({
          message: "Task not updated.",
        });
      }
    });
  }

  static delete(req, res) {
    const id = +req.params.id;

    Todo.destroy({
      where: { id },
    }).then((result) => {
      if (result) {
        res.json({
          message: "Task has been deleted.",
        });
      } else {
        res.json({
          message: "Task not deleted.",
        });
      }
    });
  }
}

module.exports = TodoController;
