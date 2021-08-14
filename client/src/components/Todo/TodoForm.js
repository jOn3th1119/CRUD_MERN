import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

export const TodoForm = ({ todo, onSubmit }) => {
  const { register, handleSubmit } = useForm({ defaultValues: { text: todo ? todo.text : "" } });
  const history = useHistory();
  
  const submitHandler = handleSubmit(data => {
    onSubmit(data)
    history.push("/")
  });

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="text">
          Text:
        </label>
        <input className="form-control mt-2"
          autoComplete="off"
          type="text"
          name="text"
          id="text"
          {...register("text", { required: "Required", })} />
      </div>
      <div className="form-group mt-2">
        <button type="submit" className="btn btn-primary">Save Todo</button>
      </div>
    </form>
  )
}
