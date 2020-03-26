import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/home" activeClassName={s.activeLink}>Главная</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/endeavors" activeClassName={s.activeLink}>Стремления</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/activities" activeClassName={s.activeLink}>Действия</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/quests" activeClassName={s.activeLink}>Квесты</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/progress" activeClassName={s.activeLink}>Прогресс</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Профиль</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Сообщения</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;