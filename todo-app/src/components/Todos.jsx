import { useState } from "react"
import TodoItem from "./TodoItem"
import Form from "./Form"
import TodoList from "./TodoList"

export default function Todos() {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    
    return (
        <div>
            <Form todo={todo} todos={todos} setTodo={setTodo} setTodos={setTodos}/>
            <TodoList todos={todos}/>
        </div>
    )
}