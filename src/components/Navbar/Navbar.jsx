import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
console.log(s);
// let s = {
//     'nav': 'Navbar_nav__3ou9Q',
//     'item': 'Navbar_item__3qaF3',
//     'active' : 'Baksndakdn_actve'
// }

let c1 = "item";
let c2 = "active";
// "item active"
let classes = c1 + " " + c2;
let classesNew = `${s.item} ${c2}`;


const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item} activeClassName={s.activeLink}>
            <NavLink to='/profile'>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to='/dialogs'>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news'>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music'>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/settings'>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;