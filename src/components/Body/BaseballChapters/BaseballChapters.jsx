import React from "react";
import "./BaseballChapters.css";
import battingImage from "./../../../image/battingCorrect.png";
import pitchingImage from "./../../../image/pitchingCorrect.png";
import brainImage from "./../../../image/brain.png";

const BaseballChapters = () => {
    return (
        <div className="container-fluid padding">
            <div className="row text-center padding">
            <div className="col-xs-12 col-sm-6 col-md-4">
                <img className="chapterIcons" src={pitchingImage}></img>
                <h3>Питчинг</h3>
                <p>Я полевой игрок, но вместе с анализом техники отбивания, я также много времени уделяю просмотру техники ведущих питчеров мира. Так что, небольшие советы в этом вопросе я тоже способен дать.</p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 ">
                <img className="chapterIcons" src={battingImage}></img>
                <h3>Отбивание</h3>
                <p>Отбивание – мой конек. Здесь я как рыба в воде и легко смогу помочь вам овладеть битой настолько быстро, что не заметите даже, как начнете выбивать хоумраны один за одним.</p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
                <img className="chapterIcons" src={brainImage}></img>
                <h3>Психология</h3>
                <p>Не менее важная часть игры, это ваш мозг. Я научу вас изучать соперника, правильно понимать игровые ситуации, и это станет вашим главным оружием в борьбе с соперником.</p>
            </div>
            </div>
            <hr className="my-4"></hr>
        </div>
    );
}

export default BaseballChapters;