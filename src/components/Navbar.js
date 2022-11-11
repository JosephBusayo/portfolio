import React from 'react'
import {Link} from 'react-router-dom'
import '../Styles/Navbar.css';


export function Navbar(props){

    return(
    <header>
        <section className="menu-wrapper"> 
            <img className={`logo ${props.isActive ? 'active' : ''}`} src="./img/logo.png" alt="JB"/>

            <button
                className={`menu-btn ${props.isActive ? 'active': ''} `}
                onClick={() => props.toggleActive()}
            >
                <div className="menu-icon"></div>
                <div className="menu-icon"></div>
                <div className="menu-icon"></div>
            </button>
        </section>

        <nav className={`nav ${props.isActive ? 'active' : ''}`}>
            <ol className="nav__menu">
                <li><Link 
                        to="/" 
                        className={`nav__link ${props.isActive ? 'active' : ''}`}
                        onClick={() => props.toggleActive()}
                    >Home</Link>
                </li>

                <li><Link 
                        to="/about" 
                        className={`nav__link ${props.isActive ? 'active' : ''}`}
                        onClick={() => props.toggleActive()}
                    >About</Link>
                </li>

                <li><Link 
                        to="/project" 
                        className={`nav__link ${props.isActive ? 'active' : ''}`}
                        onClick={() => props.toggleActive()}
                    >Projects</Link>
                </li>

                <li><Link 
                        to="/contact" 
                        className={`nav__link ${props.isActive ? 'active' : ''}`}
                        onClick={() => props.toggleActive()}
                    >Contact</Link>
                </li>
            </ol>
        </nav>
    </header>
    )
}
