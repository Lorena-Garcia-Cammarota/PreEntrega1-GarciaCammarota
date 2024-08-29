import React from 'react'
import "./navbar.css"
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {

    return (

        <header>

            <h1>Mundo Plantas Online <img className='imgIcono' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaW1QIx1WzzVajdwXX8c7LZ-gu1uUxXAdY6Q&s" alt="Icono" /></h1>
            
            <nav>
                <ul>
                    <li>Productos</li>
                    <li>Plantas Interiores</li>
                    <li>Plantas Exteriores</li>
                    <li>Otros</li>
                </ul>
            </nav>

            
            <CartWidget/>
        
        </header>
    )
}

export default Navbar


