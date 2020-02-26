import React from 'react';
import "./Footer.css"
import inst from "./../../image/inst.jfif"

const Footer = () => {
    return (
        <footer className="container-fluid">
        <div className="container">
            <div className="row padding text-center">
                <div className="col-12">
                    <h2>Мои контакты</h2>
                </div>
                <div className="col-12 social padding">
                    <a href="https://www.facebook.com/theboy4ik"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/verum.ludo/"><i className="fab fa-instagram"></i></a>
                    <a href="mailto:theboy4ik33@gmail.com"><i className="fab fa-google"></i></a>
                    
                   
                    
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;