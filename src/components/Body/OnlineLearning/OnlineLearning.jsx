import React from "react";
import "./OnlineLearning.css";
import SeniorImage from "./../../../image/card_1.jpg";
import ProspectImage from "./../../../image/card_2.jpeg";
import AdultImage from "./../../../image/card_3.webp";


const OnlineLearning = () => {
    return (
        <div>
            <div className="container-fluid padding">
                <div className="row alert text-center">
                    <div className="col-12">
                        <h1 className="display-4">Онлайн обучение</h1>
                        <hr></hr>
                    </div>

                </div>

            </div>
            <div className="container padding">
                <div className="row padding">
                    <div className="col-md-4">
                        <div className="card" id="asd">
                            <img src={SeniorImage} className="card-img-top"></img>
                            <div className="card-body">
                                <h4 className="card-title">Seniors (12-15 лет)</h4>
                                <p className="card-text">Обучение базовым бейсбольным навыкам, путем обучения бейсбольной
                                техники.</p>
                                <a href="/online" className="btn btn-warning">Далее</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={ProspectImage} className="card-img-top"></img>
                            <div className="card-body">
                                <h4 className="card-title">Prospects (16-19 лет)</h4>
                                <p className="card-text">Максимально возможное физическое развитие специфических бейсбольных
                                навыков путем глубокого анализа техники игрока.</p>
                                <a href="/online" className="btn btn-warning">Далее</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={AdultImage} className="card-img-top"></img>
                            <div className="card-body">
                                <h4 className="card-title">Adults (20+ лет)</h4>
                                <p className="card-text">Развитие бейсбольных навыков, используя сильные стороны взрослого
                                игрока.</p>
                                <a href="/online" className="btn btn-warning">Далее</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OnlineLearning;