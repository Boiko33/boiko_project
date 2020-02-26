import React from "react";
import "./AboutMe.css";
import me_2 from "./../../../image/me_2.jpg";
import OwnCoach from "./OwnCoach/OwnCoach";
import HardWork from "./HardWork/HardWork";
import Conclusion from "./Conclusion/Conclusion";

const AboutMe = () => {
    return (
        <div>
        <OwnCoach />
        <HardWork />
        <Conclusion />
        </div>
    );
}

export default AboutMe;