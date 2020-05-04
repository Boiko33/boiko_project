import React from "react";
import "./AboutMe.css";
import OwnCoach from "./OwnCoach/OwnCoach";
import HardWork from "./HardWork/HardWork";
import Conclusion from "./Conclusion/Conclusion";
import MapComponent from './MapComponent/MapComponent';

const AboutMe = () => {
    return (
        <div>
        <OwnCoach />
        <HardWork />
        <Conclusion />
        <MapComponent />
        </div>
    );
}

export default AboutMe;