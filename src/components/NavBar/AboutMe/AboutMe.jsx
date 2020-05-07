import React from "react";
import "./AboutMe.css";
import OwnCoach from "./OwnCoach/OwnCoach";
import HardWork from "./HardWork/HardWork";
import Conclusion from "./Conclusion/Conclusion";
import MapComponent from './MapComponent/MapComponent';
import WeatherWidgetSecond from "./WeatherWidgetSecond.js/WeatherWidgetSecond";

const AboutMe = () => {
    return (
        <div>
            <OwnCoach />
            <HardWork />
            <Conclusion />
            <div className="mapAndWeather">
                <MapComponent />
                <WeatherWidgetSecond />
            </div>
        </div>
    );
}

export default AboutMe;