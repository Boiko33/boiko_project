import React from "react";
import image1 from "./../../../image/1.jpg";
import image2 from "./../../../image/2.jpg";
import image3 from "./../../../image/3.jpg";
import "./Sliders.css";
import { NavLink } from 'react-router-dom';

const Sliders = () => {
    return (
        <div className="carousel slide" data-ride="carousel" id="slides">
            <ul className="carousel-indicators">
                <li data-target="#slides" data-slide-to="0" className="active"></li>
                <li data-target="#slides" data-slide-to="1"></li>
                <li data-target="#slides" data-slide-to="2"></li>
            </ul>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={image1}></img>
                    <div className="carousel-caption">
                        <h1 className="display-2">Бейсбольный блог</h1>
                        <h3>Будьте бейсбольнее</h3>
                        <NavLink to="/blog" ><button className="btn btn-danger btn-lg" type="button">Блог</button></NavLink>
                    </div>
                </div>
                <div className="carousel-item others">
                    <img src={image2}></img>
                </div>
                <div className="carousel-item others">
                    <img src={image3}></img>
                </div>

            </div>
        </div>
    );
}

export default Sliders;