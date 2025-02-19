import Fruit from "./Fruit"

export default function Fruits(){
    let fruitsList = [
        {name: "Pineapple", price: 50, emoji : '🍍', soldout: false},
        {name: "Orange", price: 60, emoji : '🍊', soldout: false},
        {name: "Apple", price: 90, emoji : '🍎', soldout: true},
        {name: "Mango", price: 80, emoji : '🥭', soldout: false},
        {name: "Watemelon", price: 20, emoji : '🍉', soldout: true}
    ]
    return (
        <table>
            <thead>
                <tr>
                    <th>Symbol</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Availablility</th>
                </tr>
            </thead>
            <tbody>
                {fruitsList.map( (fruit, index) => (
                    <Fruit 
                        key={index} 
                        name={fruit.name} 
                        price={fruit.price} 
                        emoji={fruit.emoji}
                        soldout = {fruit.soldout}
                    />
                ))}
            </tbody>
        </table>
    )
}