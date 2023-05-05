import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const getTodos = () => {
    axios({
      method: "get",
      url: "http://localhost:3000/todos",
    })
      .then((result) => {
        setTodos(result.data);
        console.log(result.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="container">
      <h1>Selamat datang, di website kami.</h1>

      <p>Lorem ipsum adalah dummy text</p>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((todo) => {
            const { id, task, status } = todo;
            return (
              <tr>
                <td>{id}</td>
                <td>{task}</td>
                <td>{status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
