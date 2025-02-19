import { useState } from "react"

export default function Form(){
    const [person, setPerson] = useState({fname:"",lname:"",age:"",address:"",state:"",phone:"" });
    function handleSubmit(e){
        e.preventDefault()
        console.log(person)
    }
    return (
        <div>
            <p>{person.fname}-{person.lname} is {person.age} years old. He is from {person.state}, with address {person.address}. phone: {person.phone}</p>
            <form>
                <input onChange={e => setPerson({...person, "fname": e.target.value})} fname={person.fname} type="text"/><label>FirstName</label><br/>
                <input onChange={e => setPerson({...person, "lname": e.target.value})} lname={person.lname} type="text"/><label>Last Name</label><br/>
                <input onChange={e => setPerson({...person, "age": e.target.value})} age={person.age} type="number"/><label>Age</label><br/>
                <input onChange={e => setPerson({...person, "address": e.target.value})} address={person.address} type="text"/><label>Address</label><br/>
                <input onChange={e => setPerson({...person, "state": e.target.value})} state={person.state} type="text"/><label>State</label><br/>
                <input onChange={e => setPerson({...person, "phone": e.target.value})} phone={person.phone} type="number"/><label>Mobile Number</label><br/>
                <button onClick={ e => handleSubmit(e)}>Submit</button>
            </form>
        </div>
    )
}