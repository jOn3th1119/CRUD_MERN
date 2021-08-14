import React from 'react';
import { TodoForm } from './TodoForm';
import axios from 'axios';

export const CreateTodo = () => {
  
  const onSubmit = (data => {
    axios.post('/api/todo/', data)
    .then(res => console.log(res.data))
    .catch((err) => console.log("Error: " + err));
  });

  return (
    <div className="container">
      <div className='mt-3'>
        <h3>Create Todo Item</h3>
        <TodoForm onSubmit={onSubmit}/>
      </div>
    </div>
  )
}
