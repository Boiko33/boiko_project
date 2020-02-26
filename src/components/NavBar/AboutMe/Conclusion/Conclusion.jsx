import React from "react";
import "./Conclusion";
import me_3 from "./../../../../image/me_3.jpg";

const Conclusion = () => {
    return (
        <div class="container-fluid padding">
        <div class="row padding">
            <div class="offset-lg-2 col-lg-4">
                <h1>Слава</h1>
                <p>И вот, спустя 5-6 лет тяжелого труда я наконец-то вкусил немного этого величия, когда тебя боятся соперники, когда ты абсолютно уверен на поле и просто получаешь огромное удовольствие от своей игры. </p>
                    <p>Был бы тот, кто прошел бы со мной рядом этот путь, я был бы в разы еще сильнее. Но зато, теперь я могу стать для вас тем человеком, который сможет указать вам правильный путь и вы пройдете его гораздо быстрее меня, и в будущем, сможете превзойти мои достижения.</p>
                </div>
            <div class="col-lg-6">
                <img src={me_3} class="img-fluid"></img>
            </div>
        </div>
    </div>
    );
}

export default Conclusion;