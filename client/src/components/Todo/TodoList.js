import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import axios from 'axios';

export const TodoList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('/api/todo/')
      .then(res => { setItems(res.data) })
      .catch((err) => console.log("Error: " + err));
  }, [])

  return (
    <div className="container">
      <div className="mt-3">
        <h3>TodoList</h3>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Text</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              items.map(todo => 
                <tr key={todo._id}>
                  <td>{todo.text}</td>
                  <td><Link to={`/edit/${todo._id}`}>Edit</Link></td>
                </tr>  
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
