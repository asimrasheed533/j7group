import React from "react";
import signature from "../assets/signature.png";
import layera from "../assets/layera.png";

export function Abc() {
  return (
    <div className="hotel__card__main__container">
      <div className="hotal__card__bg__wraper">
        <img src={layera} alt="award" />
      </div>
      <div className="hotel__card__signal__wraper">
        <div className="hotel__card__main__container__img">
          <img src={signature} alt="Signature" />
        </div>
        <div className="hotel__card__main__container__text">
          <div className="hotel__card__main__container__text__heading">
            SIGNATURE <span>HOTEL</span>{" "}
          </div>
          <div className="hotel__card__main__container__text__sub__heading">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </div>
    </div>
  );
}
