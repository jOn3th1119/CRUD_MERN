import React, { useEffect, useState } from 'react'

import { TodoForm } from './TodoForm';
import axios from 'axios';
import { useRouteMatch } from 'react-router-dom';

export const EditTodo = () => {
  const match = useRouteMatch()
  const [todo, setTodo] = useState()
  
  useEffect(() => {
    axios.get(`/api/todo/${match.params.id}`)
      .then(res => { setTodo(res.data) })
      .catch((err) => console.log("Error: " + err));
  }, [])

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    todo ? 
    <div className="container">
      <div className='mt-3'>
        <h3>Edit Todo Item</h3>
        <TodoForm todo={todo} onSubmit={onSubmit}/>
      </div>
    </div> : <div>Loading</div>
  )
}
