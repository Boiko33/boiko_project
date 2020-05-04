import React from "react";
import "./MapComponent.css"

const MapComponent = () => {
    return (
        <div className="container-fluid">
            <div className="row text-center alert">
                <div className="col-12">
                    <p>А вот то место, где я начал, и продолжаю свое восхождение на бейсбольный трон!</p>
                    <iframe className="mapBody"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.8794354651322!2d32.25144438452141!3d48.48991448273431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c4ef08fd98189d7!2sDiamond%20Baseball%20Stadium!5e1!3m2!1sru!2sua!4v1588578535114!5m2!1sru!2sua"
                        width="600"
                        height="450"
                        frameborder="0"
                        allowfullscreen=""
                        ariaHidden="false"
                        tabindex="0"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default MapComponent;