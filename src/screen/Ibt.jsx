import React from "react";
import header from "../assets/backgroud.png";
import introibt from "../assets/introibt.png";
import mapibt from "../assets/mapibt.png";
import projectcard from "../assets/projectcard.png";
import ibtfeature from "../assets/ibtfeature.png";

function Ibt() {
  return (
    <>
      <div className="ibt__header__container">
        <div className="ibt__header__img">
          <img src={header} alt="header" />
        </div>
        <div className="ibt__header__map">
          <img src={mapibt} alt="map" />
        </div>
        <div className="header__contant">
          <div className="header__contant__heading">
            <span>IBT</span> Pakistan
          </div>
          <div className="header__contant__sub__heading">
            Pakistan's Largest Business Tower
          </div>
        </div>
      </div>
      <div className="ibt__intro__section">
        <div className="ibt__intro__section__left">
          <div className="ibt__intro__section__left__heading__style"></div>
          <div className="ibt__intro__section__left__heading">INTRODUCTION</div>
          <div className="ibt__intro__section__left__sub__heading">
            IBT is an industrial Mall , It will cater needs of all construction
            industry, Home furnitures and accessories and auto mobile industry
            Pakistan needs industrial mall for its economic growth It will be
            like mini china It will be like a trade centre IBT will create
            opportunities for Pakistani traders to buy Chinese, Korean, German
            and other International Products under one roof in international
            pavilion, While our national products will be displayed at national
            pavilion
          </div>
        </div>
        <div className="ibt__intro__section__right">
          <div className="ibt__intro__section__right__img">
            <img src={introibt} alt="introibt" />
          </div>
        </div>
      </div>
      {/* <<third__section------ */}
      <div className="components_main_container" id="components">
        <div className="components_maincontainerbg_dark">
          <div className="components_maincontainerbg_boarder"></div>
          <div className="max__class">
            <div className="intro_containercontent_heading">
              PROJECT COMPONENTS
              <div className="intro_containercontentheading_underline"></div>
            </div>
            <div className="components_cards_container">
              <div className="card__container">
                <img className="card__image" src={projectcard} alt="" />
                <div className="card_content_container">
                  <div className="card__text">One Five Star Hotel</div>
                  <div className="card1_containercontentheading_underline"></div>
                </div>
              </div>
              <div className="card__container">
                <div className="img__container"></div>
                <img className="card__image" src={projectcard} alt="" />
                <div className="card_content_container">
                  <div className="card__text">Industrial Mall</div>
                  <div className="card1_containercontentheading_underline"></div>
                </div>
              </div>
              <div className="card__container">
                <img className="card__image" src={projectcard} alt="" />
                <div className="card_content_container">
                  <div className="card__text">
                    One dedicated tower for most Luxurious Apartments
                  </div>
                  <div className="card1_containercontentheading_underline"></div>
                </div>
              </div>
              <div className="card__container">
                <img className="card__image" src={projectcard} alt="" />
                <div className="card_content_container">
                  <div className="card__text">
                    Dedicated Corporate And IT Centre
                  </div>
                  <div className="card1_containercontentheading_underline"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ....
.
.
.

.
. */}
      <div className="specs__section__wraper">
        <div className="specs__section__wraper__left">
          <div className="specs__section__wraper__left__land">
            <div className="specs__section__wraper__left__land__svg">
              <svg
                id="Group_312"
                data-name="Group 312"
                width="72.167"
                height="72.165"
                viewBox="0 0 72.167 72.165"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="Rectangle_794"
                      data-name="Rectangle 794"
                      width="72.167"
                      height="72.165"
                      fill="none"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Group_311"
                  data-name="Group 311"
                  clip-path="url(#clip-path)"
                >
                  <path
                    id="Path_41"
                    data-name="Path 41"
                    d="M36.077,0Q47.124,0,58.17,0a13.825,13.825,0,0,1,13.982,13.92q.02,22.169.005,44.338a13.743,13.743,0,0,1-13.936,13.9q-22.131.017-44.263,0A13.753,13.753,0,0,1,.007,58.2q-.013-22.131,0-44.263A13.753,13.753,0,0,1,13.982,0Q25.029-.008,36.077,0M67.352,36.156q0-10.972,0-21.945a8.974,8.974,0,0,0-9.4-9.4H14.215a8.977,8.977,0,0,0-9.4,9.4q0,21.87,0,43.739a8.979,8.979,0,0,0,9.4,9.4q21.87,0,43.739,0a8.979,8.979,0,0,0,9.4-9.4q0-10.9,0-21.794"
                    transform="translate(0 0)"
                  />
                  <path
                    id="Path_42"
                    data-name="Path 42"
                    d="M64.7,68.356c0,2.842.011,5.744,0,8.645a2.4,2.4,0,1,1-4.8-.066q-.01-5.711,0-11.422c0-1.252-.008-2.5,0-3.757a1.68,1.68,0,0,1,1.854-1.868q7.627-.011,15.255,0a2.4,2.4,0,1,1,.023,4.8c-2.9.014-5.808,0-8.569,0l34.73,34.725v-.481q0-3.945,0-7.89a2.419,2.419,0,1,1,4.808.011q0,7.44,0,14.879c0,1.446-.606,2.051-2.051,2.052q-7.44,0-14.879,0a2.419,2.419,0,1,1-.011-4.808q3.907-.007,7.815,0h.656Z"
                    transform="translate(-47.862 -47.855)"
                  />
                </g>
              </svg>
            </div>
            <div className="spec__wraper__contant__sub__card">
              <div className="specs__section__wraper__left__land__contant__heading">
                Land Area
              </div>
              <div className="specs__section__wraper__left__land__contant__sub__heading">
                136 kanals - 81600 sq yards
              </div>
            </div>
          </div>
          <div className="specs__section__wraper__left__land">
            <div className="specs__section__wraper__left__land__svg">
              <svg
                id="Group_312"
                data-name="Group 312"
                width="72.167"
                height="72.165"
                viewBox="0 0 72.167 72.165"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="Rectangle_794"
                      data-name="Rectangle 794"
                      width="72.167"
                      height="72.165"
                      fill="none"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Group_311"
                  data-name="Group 311"
                  clip-path="url(#clip-path)"
                >
                  <path
                    id="Path_41"
                    data-name="Path 41"
                    d="M36.077,0Q47.124,0,58.17,0a13.825,13.825,0,0,1,13.982,13.92q.02,22.169.005,44.338a13.743,13.743,0,0,1-13.936,13.9q-22.131.017-44.263,0A13.753,13.753,0,0,1,.007,58.2q-.013-22.131,0-44.263A13.753,13.753,0,0,1,13.982,0Q25.029-.008,36.077,0M67.352,36.156q0-10.972,0-21.945a8.974,8.974,0,0,0-9.4-9.4H14.215a8.977,8.977,0,0,0-9.4,9.4q0,21.87,0,43.739a8.979,8.979,0,0,0,9.4,9.4q21.87,0,43.739,0a8.979,8.979,0,0,0,9.4-9.4q0-10.9,0-21.794"
                    transform="translate(0 0)"
                  />
                  <path
                    id="Path_42"
                    data-name="Path 42"
                    d="M64.7,68.356c0,2.842.011,5.744,0,8.645a2.4,2.4,0,1,1-4.8-.066q-.01-5.711,0-11.422c0-1.252-.008-2.5,0-3.757a1.68,1.68,0,0,1,1.854-1.868q7.627-.011,15.255,0a2.4,2.4,0,1,1,.023,4.8c-2.9.014-5.808,0-8.569,0l34.73,34.725v-.481q0-3.945,0-7.89a2.419,2.419,0,1,1,4.808.011q0,7.44,0,14.879c0,1.446-.606,2.051-2.051,2.052q-7.44,0-14.879,0a2.419,2.419,0,1,1-.011-4.808q3.907-.007,7.815,0h.656Z"
                    transform="translate(-47.862 -47.855)"
                  />
                </g>
              </svg>
            </div>
            <div className="spec__wraper__contant__sub__card">
              <div className="specs__section__wraper__left__land__contant__heading">
                Land Area
              </div>
              <div className="specs__section__wraper__left__land__contant__sub__heading">
                136 kanals - 81600 sq yards
              </div>
            </div>
          </div>
          <div className="specs__section__wraper__left__land">
            <div className="specs__section__wraper__left__land__svg">
              <svg
                id="Group_312"
                data-name="Group 312"
                width="72.167"
                height="72.165"
                viewBox="0 0 72.167 72.165"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="Rectangle_794"
                      data-name="Rectangle 794"
                      width="72.167"
                      height="72.165"
                      fill="none"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Group_311"
                  data-name="Group 311"
                  clip-path="url(#clip-path)"
                >
                  <path
                    id="Path_41"
                    data-name="Path 41"
                    d="M36.077,0Q47.124,0,58.17,0a13.825,13.825,0,0,1,13.982,13.92q.02,22.169.005,44.338a13.743,13.743,0,0,1-13.936,13.9q-22.131.017-44.263,0A13.753,13.753,0,0,1,.007,58.2q-.013-22.131,0-44.263A13.753,13.753,0,0,1,13.982,0Q25.029-.008,36.077,0M67.352,36.156q0-10.972,0-21.945a8.974,8.974,0,0,0-9.4-9.4H14.215a8.977,8.977,0,0,0-9.4,9.4q0,21.87,0,43.739a8.979,8.979,0,0,0,9.4,9.4q21.87,0,43.739,0a8.979,8.979,0,0,0,9.4-9.4q0-10.9,0-21.794"
                    transform="translate(0 0)"
                  />
                  <path
                    id="Path_42"
                    data-name="Path 42"
                    d="M64.7,68.356c0,2.842.011,5.744,0,8.645a2.4,2.4,0,1,1-4.8-.066q-.01-5.711,0-11.422c0-1.252-.008-2.5,0-3.757a1.68,1.68,0,0,1,1.854-1.868q7.627-.011,15.255,0a2.4,2.4,0,1,1,.023,4.8c-2.9.014-5.808,0-8.569,0l34.73,34.725v-.481q0-3.945,0-7.89a2.419,2.419,0,1,1,4.808.011q0,7.44,0,14.879c0,1.446-.606,2.051-2.051,2.052q-7.44,0-14.879,0a2.419,2.419,0,1,1-.011-4.808q3.907-.007,7.815,0h.656Z"
                    transform="translate(-47.862 -47.855)"
                  />
                </g>
              </svg>
            </div>
            <div className="spec__wraper__contant__sub__card">
              <div className="specs__section__wraper__left__land__contant__heading">
                Land Area
              </div>
              <div className="specs__section__wraper__left__land__contant__sub__heading">
                136 kanals - 81600 sq yards
              </div>
            </div>
          </div>
          <div className="specs__section__wraper__left__land">
            <div className="specs__section__wraper__left__land__svg">
              <svg
                id="Group_312"
                data-name="Group 312"
                width="72.167"
                height="72.165"
                viewBox="0 0 72.167 72.165"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="Rectangle_794"
                      data-name="Rectangle 794"
                      width="72.167"
                      height="72.165"
                      fill="none"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Group_311"
                  data-name="Group 311"
                  clip-path="url(#clip-path)"
                >
                  <path
                    id="Path_41"
                    data-name="Path 41"
                    d="M36.077,0Q47.124,0,58.17,0a13.825,13.825,0,0,1,13.982,13.92q.02,22.169.005,44.338a13.743,13.743,0,0,1-13.936,13.9q-22.131.017-44.263,0A13.753,13.753,0,0,1,.007,58.2q-.013-22.131,0-44.263A13.753,13.753,0,0,1,13.982,0Q25.029-.008,36.077,0M67.352,36.156q0-10.972,0-21.945a8.974,8.974,0,0,0-9.4-9.4H14.215a8.977,8.977,0,0,0-9.4,9.4q0,21.87,0,43.739a8.979,8.979,0,0,0,9.4,9.4q21.87,0,43.739,0a8.979,8.979,0,0,0,9.4-9.4q0-10.9,0-21.794"
                    transform="translate(0 0)"
                  />
                  <path
                    id="Path_42"
                    data-name="Path 42"
                    d="M64.7,68.356c0,2.842.011,5.744,0,8.645a2.4,2.4,0,1,1-4.8-.066q-.01-5.711,0-11.422c0-1.252-.008-2.5,0-3.757a1.68,1.68,0,0,1,1.854-1.868q7.627-.011,15.255,0a2.4,2.4,0,1,1,.023,4.8c-2.9.014-5.808,0-8.569,0l34.73,34.725v-.481q0-3.945,0-7.89a2.419,2.419,0,1,1,4.808.011q0,7.44,0,14.879c0,1.446-.606,2.051-2.051,2.052q-7.44,0-14.879,0a2.419,2.419,0,1,1-.011-4.808q3.907-.007,7.815,0h.656Z"
                    transform="translate(-47.862 -47.855)"
                  />
                </g>
              </svg>
            </div>
            <div className="spec__wraper__contant__sub__card">
              <div className="specs__section__wraper__left__land__contant__heading">
                Land Area
              </div>
              <div className="specs__section__wraper__left__land__contant__sub__heading">
                136 kanals - 81600 sq yards
              </div>
            </div>
          </div>
        </div>
        <div className="specs__section__wraper__right">
          <div className="specs__section__wraper__right__contant">
            Project SPECIFICATIONS
          </div>
        </div>
      </div>
      <div className="ibt__feature__container">
        <div className="ibt__feature__container__left">
          <div className="ibt__feature__container__left__wraper">
            <div className="ibt__feature__container__left__contant__heading">
              PROJECT FEATURE
            </div>
            <div className="feature__left__sub__detail__one">
              <span>Largest</span> and <span>Tallest</span> Building of Pakistan
            </div>
            <div className="feature__left__sub__detail__two">
              <span>Pakistans 1st</span> theme based industrial mall{" "}
            </div>
            <div className="feature__left__sub__detail__three">
              <span>Words</span> one of the best
              <span>International trade centre</span>
            </div>
          </div>
        </div>
        <div className="ibt__feature__container__right">
          <div className="ibt__feature__container__right__img">
            <img src={ibtfeature} alt="feature img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Ibt;
