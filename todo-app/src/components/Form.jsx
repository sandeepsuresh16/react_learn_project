import styles from "./form.module.css"
export default function Form({todo, todos, setTodo, setTodos}){
    function handleSubmit(e) {
        e.preventDefault()
        setTodos([...todos, todo])
        setTodo("")
    }
    return (
        <form className={styles.todoform} onSubmit={ e => handleSubmit(e)}>
            <div className={styles.inputcontainer}>
                <input className={styles.todoinput} type="text" onChange={ e => setTodo(e.target.value)} value={todo} placeholder="Enter todo here"/>
                <button className={styles.todoButton} type="submit">Add</button>
            </div>
        </form>        
    )
}