import React from 'react';
import "./NavBar.css";
import logo from "./../../image/logos.png"
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <NavLink to="/main" className="navbar-brand"><img src={logo} alt="logo"></img></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto" >
                    <li className="nav-item active">
                        <NavLink to="/main" className="nav-link">Главная</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink  to="/aboutme" className="nav-link">Обо мне</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink to="/blog" className="nav-link">Блог</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink to="/online" className="nav-link">Онлайн обучение</NavLink>
                    </li>

                </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;