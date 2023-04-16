import React,{ useState} from 'react'
import { Todo } from './model'
import './App.css'
import Input from './components/Input'
import TodoList from './components/TodoList'

const App= () => {
  const [todo,setTodo]=useState<string>("")
  const [todos,setTodos]=useState<Todo[]>([])
  const handleClick=(e:React.FormEvent)=>{
    e.preventDefault()
    if(todo){
    setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
    setTodo("")
  }
}
console.log(todos)
  return (
    <div className='App'>
      <h2> Todos Application</h2>
      <Input todo={todo} setTodo={setTodo} handleClick={handleClick}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    
    </div>
  )
}

export default App