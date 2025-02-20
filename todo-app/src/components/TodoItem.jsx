import styles from "./todoitem.module.css"
export default function TodoItem({item, todos, setTodos}) {
    function handleDelete(item) {
        setTodos(todos.filter((todo) => todo.name !== item.name))
    }
    function handleClick(name) {
        const newList = todos.map((todo) => todo.name === name ? {...todo,done: !todo.done} : todo)
        setTodos(newList)
    }
    const newClass = item.done ? styles.comoleted : ""
    return (
        <div className={styles.item}>
            <div className={styles.itemname}>
                <span 
                    className={newClass} 
                    onClick={() => handleClick(item.name)}
                >
                    {item.name}
                </span>
                <span>
                    <button onClick={()=>handleDelete(item)} className={styles.deletebutton}>x</button>
                </span>
            </div>
            <hr className={styles.line}/>
        </div>
    )
}