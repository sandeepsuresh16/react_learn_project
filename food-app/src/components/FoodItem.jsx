import styles from "./foodItem.module.css"
export default function FoodItem({recipe}){
    console.log(recipe)
    return(
        <div className={styles.outerContainer}>
            <img className={styles.itemImage}src={recipe.image}/>
            <div className={styles.itemContent}>
                <p className={styles.itemName}>{recipe.title}</p>
            </div>
            <div  className={styles.buttonContainer}>
                <button className={styles.button}>View Recipe</button>
            </div>
        </div>
    )
}