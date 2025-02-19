import { useState } from "react"
import styles from "./form.module.css"
export default function Form({todos, setTodos}){
    const [todo, setTodo] = useState({name:"", done:false})
    function handleSubmit(e) {
        e.preventDefault()
        setTodos([...todos, todo])
        setTodo({name:"", done:false})
    }
    return (
        <form className={styles.todoform} onSubmit={ e => handleSubmit(e)}>
            <div className={styles.inputcontainer}>
                <input className={styles.todoinput} type="text" onChange={ e => setTodo({name:e.target.value, done:false})} value={todo.name} placeholder="Enter todo here"/>
                <button className={styles.todoButton} type="submit">Add</button>
            </div>
        </form>        
    )
}