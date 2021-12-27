import React from "react";
import "./index.scss";
import whatWeDo from '../../Image/whatWeDo.jpeg'
const cardsWhatWeDo = [{ cardImage: whatWeDo, Title: "Cardio" }, { cardImage: whatWeDo, Title: "Muscle Training " }, { cardImage: whatWeDo, Title: "Abs Training" }]
const WhoWe = () => {
  return (
    <>
      <div className="what-container">
        <h1 className="mt-5">WHAT WE DO</h1>
      </div>
      <div className="cards_landscape_wrap-2">
        <div className="container">
          <div className="row">
            {cardsWhatWeDo.map((cards, index) => {
              return <div className="col-xs-12 col-sm-6 col-md-4 " key={index + Math.random()}>
                <a href="#!">
                  <div className="card-flyer">
                    <div className="image-box">
                      <img src={cards.cardImage} alt="" />
                    </div>
                    <div className="sub-image-topic">
                      <h2>{cards.Title}</h2>
                    </div>
                  </div>
                </a>
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWe;
