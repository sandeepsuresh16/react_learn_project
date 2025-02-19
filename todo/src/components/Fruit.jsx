export default function Fruit({name, price, emoji, soldout}){
    return(
        <>
            {
                price > 50 ?
                <tr>
                    <td>{emoji}</td>
                    <td>{name}</td>
                    <td>{price}</td>
                    {soldout && <td>{"[Out-of-stock]"}</td>}
                </tr> 
                : ""
            }
        </>
    )
}