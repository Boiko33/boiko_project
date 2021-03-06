import React from "react";
import "./MainBlock.css";
import { Link } from 'react-router-dom';
import WeatherWidget from "./WeatherWidget/WeatherWidget";

const MainBlock = () => {
    return (
        <div className="mainBlock">
            <div className="row jumbotron">
                <div className="col-xs-12 col-sm-12 col-md-8 col-xl-8">
                    <p className="lead">Здравствуйте, дорогие бейсбольные фанаты, игроки, любители бейсбола! Меня зовут Константин Бойко, я профессиональный игрок бейсбольной команды "BioTexCom-KNTU". В этом блоге я хочу поделится с вами своим спортивным опытом и рассказывать о тех вещах, которые я хотел бы знать раньше, будучи еще подростком. Но я уверен что и более взрослое поколение людей непременно найдет что-то полезное для себя.</p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-xl-4">
                    <Link to="/blog"><button className="btn btn-success btn-lg">Читать блог</button></Link>
                </div>
            </div>
            <div className="weatherWidget col-xs-12 col-sm-12 col-md-4 col-xl-4">
                <WeatherWidget />
            </div>
        </div>

    );
}

export default MainBlock