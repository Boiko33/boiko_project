import React from 'react';
import "./NavBar.css";
import logo from "./../../image/logos.png"
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
            <div class="container-fluid">
                <a href="/main" class="navbar-brand"><img src={logo} alt="logo"></img></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto" >
                    <li class="nav-item active">
                        <NavLink to="/main"><a class="nav-link">Главная</a></NavLink>
                    </li>
                    <li class="nav-item ">
                        <NavLink  to="/aboutme"><a class="nav-link">Обо мне</a></NavLink>
                    </li>
                    <li class="nav-item ">
                        <NavLink to="/blog"><a className="nav-link">Блог</a></NavLink>
                    </li>
                    <li class="nav-item ">
                        <NavLink to="/online"><a class="nav-link">Онлайн обучение</a></NavLink>
                    </li>

                </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;