import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import TodosList from "./components/todos-list.component";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component.js";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={TodosList} />
        <Route path="/create" component={CreateTodo} />
        <Route path="/edit/:id" component={EditTodo} />
        <h5>Thank you for the amazing semester, professor :)</h5>
      </div>
    </Router>
  );
}

export default App;
