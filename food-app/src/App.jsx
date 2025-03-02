import { useState } from "react"
import Nav from "./components/Nav"
import Search from "./components/Search"
import "./App.css"
import FoodItem from "./components/FoodItem"

let recipes = [{
  "id": 716429,
  "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
  "image": "https://img.spoonacular.com/recipes/716429-312x231.jpg",
  "imageType": "jpg",
},
{
  "id": 715538,
  "title": "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
  "image": "https://img.spoonacular.com/recipes/715538-312x231.jpg",
  "imageType": "jpg",
},
{
  "id": 715538,
  "title": "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
  "image": "https://img.spoonacular.com/recipes/715538-312x231.jpg",
  "imageType": "jpg",
},
{
  "id": 715538,
  "title": "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
  "image": "https://img.spoonacular.com/recipes/715538-312x231.jpg",
  "imageType": "jpg",
}]

function App() {
  const[recipe, setRecipe] = useState([])
  return (
    <div className="App">
      <Nav />
      <Search setRecipe={setRecipe}/>
      {recipes.map((recipe) => <FoodItem recipe={recipe}/>)}
    </div>
  )
}

export default App
