import React from 'react'
import {Link} from 'react-router-dom'
import './sidebar.css'

export default()=>{
    return(
        <div className='sidebar'>
            <h1 className='brand'>Univation</h1>
            <Link to='/' className='nav-link'>View Cars</Link>
            <Link to='/create' className='nav-link'>Create Car</Link>
        </div>
    )
}