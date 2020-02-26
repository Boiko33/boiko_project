import React from 'react';
import Sliders from './Sliders/Sliders';
import MainBlock from './MainBlock/MainBlock';
import Explaining from './Explaining/Explaining';
import BaseballChapters from './BaseballChapters/BaseballChapters';
import WhyMe from './WhyMe/WhyMe';
import BackGround from './BackGround/BackGround';
import OnlineLearning from './OnlineLearning/OnlineLearning';

const Body = () => {
    return (
        <div>
            <Sliders />
            <MainBlock />
            <Explaining />
            <BaseballChapters />
            <WhyMe />
            <BackGround />
            <OnlineLearning />
        </div>
    );
}

export default Body;