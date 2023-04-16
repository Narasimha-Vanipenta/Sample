import React, { FormEvent } from 'react'

interface InputProps{
    todo:string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleClick:(e:React.FormEvent)=>void
}

const Input:React.FC<InputProps> = ({todo,setTodo,handleClick}) => {
  return (
    <form className='form' onSubmit={handleClick}>
        <input className='input'
        type="text"
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}

        />
        <button className='button' type="submit">Add</button>
    </form>
  )
}

export default Input