import { Link, Route, Switch } from 'react-router-dom';

import { CreateTodo } from './components/CreateTodo';
import { EditTodo } from './components/EditTodo';
import React from 'react';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div>
      <div className="navbar bg-light navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link className="nav-link" to="/">Todos</Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/create">Create Todo</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route exact path="/create" component={CreateTodo} />
      </Switch>
    </div>
  );
}

export default App;
