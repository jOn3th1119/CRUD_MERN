import React from 'react';
import { TodoForm } from './TodoForm';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const CreateTodo = () => {
  const history = useHistory()
  
  const onSubmit = (async data => {
    await axios.post('/api/todo/', data)
      .then(res => console.log(res.data))
      .catch((err) => console.log("Error: " + err));
      
    history.push('/')
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
