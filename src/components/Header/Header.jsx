import React from 'react';
import s from './Header.module.css';
import icon from '../../assets/favicon.ico'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className={s.header}>
            <img alt ='smth' src={icon} />
            <div>
                <NavLink to="/login" >
                    <button>Login</button>
                </NavLink>
                <button>Register</button>
            </div>
        </header>
    )
}

export default Header;