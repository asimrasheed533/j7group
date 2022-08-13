import React from "react";
import main from "../assets/main.png";
import logo from "../assets/logo.png";
import layer from "../assets/layer.png";
import flash from "../assets/flash.png";
import js from "../assets/js.png";
import flag from "../assets/flag.png";
import globaljs from "../assets/globaljs.png";
import j7group from "../assets/j7group.png";
import j7img1 from "../assets/j7img1.png";
import j7img2 from "../assets/j7img2.png";
import j7img3 from "../assets/j7img3.png";

function Landing() {
  return (
    <div className="landing__main">
      <div className="landing__main__header">
        <div className="landing__img">
          <img src={main} alt="main img" />
        </div>
        <div className="landing__nav__bar__wraper">
          <div className="landing__header__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="landing__nav__bar__links__wraper">
            <a href="#" className="link__wraper">
              Home
            </a>
            <a href="#" className="link__wraper">
              Abouts
            </a>
            <a href="#" className="link__wraper">
              Profile
            </a>
            <a href="#" className="link__wraper">
              Vision
            </a>
            <a href="#" className="link__wraper">
              Career
            </a>
            <a href="#" className="link__wraper">
              Contact Us
            </a>
          </div>
        </div>
        <div className="landing__main__header__text">
          Pakistan's best Real Estate Investment Firm
        </div>
      </div>
      <div className="landing__header__cards__container">
        <div className="landing__header__card__wraper">
          <div className="landing__header__card__signal">
            <div className="landing__header__card__left__text">7</div>
            <div className="landing__header__card__right__text">
              <div className="landing__header__card__right__text_citys">
                City
              </div>
              <div className="landing__header__card__right__text_citys">
                Across
              </div>
              <div className="landing__header__card__right__text_citys">
                Pakistan
              </div>
            </div>
          </div>
          <div className="landing__header__card__signal">
            <div className="landing__header__card__left__text">9</div>
            <div className="landing__header__card__right__text">
              <div className="landing__header__card__right__text_citys">
                National
              </div>
              <div className="landing__header__card__right__text_citys">
                Level
              </div>
              <div className="landing__header__card__right__text_citys">
                awards
              </div>
            </div>
          </div>
          <div className="landing__header__card__signal">
            <div className="landing__header__card__left__text">5</div>
            <div className="landing__header__card__right__text">
              <div className="landing__header__card__right__text_citys">
                Completed
              </div>
              <div className="landing__header__card__right__text_citys">
                Mega
              </div>
              <div className="landing__header__card__right__text_citys">
                Structure
              </div>
            </div>
          </div>
          <div className="landing__header__card__signal_happy">
            <div className="landing__header__card__text_hapy_heading">
              Happy Customer
            </div>
            <div className="landing__header__card__text_hapy_subheading">
              100+
            </div>
          </div>
        </div>
      </div>
      <div className="flageship__container">
        <div className="flageship__container__overlay__img">
          <img src={flag} alt="flage" />
        </div>
        <div className="flahedship__main__over__wraper">
          <div className="flageship__container__left">
            <div className="flageship__container__left__text">
              <div className="flageship__container__left__text__heading">
                FLAGSHIP <span>PROJECT </span>
              </div>
              <div className="flageship__container__left__text__sub__heading">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic tcently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.
              </div>
            </div>
          </div>
          <div className="flageship__container__right">
            <div className="flageship__container__right__img">
              <img src={flash} alt="J7" />
            </div>
          </div>
        </div>
      </div>
      <div className="project__container__wraper">
        <div className="project__container__text__heading">Our Project</div>
        <div className="project__container__icon__container">
          <div className="project__icon__card">
            <img src={logo} alt="J7" />
          </div>
          <div className="project__icon__card">
            <img src={globaljs} alt="J7" />
          </div>
          <div className="project__icon__card">
            <img src={logo} alt="J7" />
          </div>
          <div className="project__icon__card">
            <img src={globaljs} alt="J7" />
          </div>
          <div className="project__icon__card">
            <img src={logo} alt="J7" />
          </div>
        </div>
      </div>
      <div className="j7__group__main__container">
        <div className="j7__group__main__container__img">
          <img src={j7group} alt="j7group" />
        </div>
        <div className="j7__group__main__container__overlay">
          <div className="j7__group__main__container__overlay__text__wraper">
            <div className="j7__group__main__container__overlay__text__heading">
              j7 Group
            </div>
            <div className="j7__group__main__container__overlay__text__sub__heading">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
          </div>
          <div className="j7__group__main__container__overlay__inner__view">
            <div className="j7__group__main__container__overlay__inner__view__img">
              <img src={j7img1} alt="view" />
            </div>
            <div className="j7__group__main__container__overlay__inner__view__img">
              <img src={j7img2} alt="view" />
            </div>
            <div className="j7__group__main__container__overlay__inner__view__img">
              <img src={j7img3} alt="view" />
            </div>
            <div className="j7__group__main__container__overlay__inner__view__img">
              <img src={j7img1} alt="view" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
