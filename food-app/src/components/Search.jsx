import { useEffect, useState } from "react"
import { API_KEY, BASE_URL } from "../constants.js"
import styles from "./search.module.css"

export default function Search({setRecipe}) {
    const [query, setQuery]= useState("pizza")
    useEffect(()=>{
        async function fetchData(){
            // const res = await fetch(`${BASE_URL}?query=${query}&apiKey=${API_KEY}`)
            // const result = await res.json()
            // setRecipe(result.results)
            // console.log(result)
        }
        fetchData()
    }, [query])
    async function handleSubmit(e){
        e.preventDefault()
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/")
        const result = await response.json()
        console.log(result)
    }
    return (
        <div className={styles.searchComponents}>
            <input className={styles.input} value={query} onChange={(e) => setQuery(e.target.value)}/>
        </div>
    )
}