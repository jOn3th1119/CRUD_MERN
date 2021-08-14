import React, { useEffect, useState } from 'react'

import { TodoForm } from './TodoForm';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';

export const EditTodo = () => {
  const history = useHistory()
  const match = useRouteMatch()
  const [todo, setTodo] = useState()
  /* eslint-disable */
  useEffect(() => {
    axios.get('/api/todo/' + match.params.id)
      .then(res => { setTodo(res.data) })
      .catch((err) => console.log("Error: " + err));
  }, [])

  const onSubmit = async (data) => {
    await axios.put('/api/todo/' + match.params.id, data)
      .then(res => console.log(res.data))
      .catch((err) => console.log("Error: " + err));
    
    history.push('/')
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
