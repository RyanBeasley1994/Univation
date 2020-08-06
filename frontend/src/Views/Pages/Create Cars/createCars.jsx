import React, { useState } from 'react'
import { createCar } from '../../../Controllers/carAction'
import './createCars.css'

export default () => {
    const [input, setInput] = useState({ name: "", brand: "", year: "" })

    function inputChanged(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    function CreateCar(e) {
        createCar(input,(res)=>{if(res)setInput({name:'',brand:'',year:''})})
        e.preventDefault();
    }

    return (
        <form className='create-car'>
            <h1>Create New Car</h1>
            <label>Name:</label>
            <input name='name' required value={input.name} onChange={inputChanged}></input>
            <label>Brand:</label>
            <input name='brand' required value={input.brand} onChange={inputChanged}></input>
            <label>Year:</label>
            <input name='year' required value={input.year} onChange={inputChanged}></input>
            <button type='submit' onClick={CreateCar}>Create Car</button>
        </form>
    )
}