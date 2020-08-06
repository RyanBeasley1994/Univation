import React, { useState, useEffect } from 'react'
import { getCars } from '../../../Controllers/carAction'
import './viewCars.css'

let count = 0;

export default () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        count++;
        getCars((carRes)=>setCars(carRes))
    }, [count < 1])


    return (
        <div className='page-container'>
            <table >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((car, key) => (
                        <tr key={key}>
                            <td>{car.name}</td>
                            <td>{car.brand}</td>
                            <td>{car.year}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}