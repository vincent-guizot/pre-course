class TodoController {
  static getTodos(req, res) {
    res.send("Todos Page");
  }
  static create(req, res) {
    res.send("Create Todos Pages");
  }

  static update(req, res) {
    res.send("Update Todos Pages");
  }

  static delete(req, res) {
    res.send("Delete Todos Pages");
  }
}

module.exports = TodoController;
