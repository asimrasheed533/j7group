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
import award from "../assets/award.png";
import awardp from "../assets/awardp.png";
import booking from "../assets/booking.png";
import vision from "../assets/vision.png";
import rename from "../assets/rename.png";
import j7team from "../assets/j7team.png";
import map from "../assets/map.png";
import { Abc } from "./Abc";

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
          <div className="landing__header__card__signal">
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
      <div className="award__section">
        <div className="award__section__text__wraper">
          <div className="award__section__text__container__heading">
            Awarded <span>PROJECT</span>
          </div>
          <div className="award__section__text__container__sub__heading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic placeat
            nisi dolorem eligendi nobis fugiat, molestias unde sunt officiis ut
            illo iure, quod recusandae distinctio dignissimos ab, atque nostrum
            quibusdam. dolorem eligendi nobis fugiat, molestias unde sunt
            officiis ut illo iure, quod recusandae distinctio dignissimos ab,
            atque nostrum quibusdam.
          </div>
        </div>
        <div className="award__section__img__container">
          <img src={award} alt="award" />
        </div>
        <div className="award__section__recive__wraper">
          <img src={awardp} alt="awardp" />
        </div>
      </div>
      <Abc />
      {/* <Abc /> */}
      <div className="booking__container">
        <div className="booking__container__text">
          Booking <span>start from</span>25%{" "}
        </div>
        <div className="booking__container__img">
          <img src={booking} alt="Booking" />
        </div>
        <div className="booking__container__j7__logo">
          <img src={js} alt="Booking" />
        </div>
      </div>
      <div className="vision__container">
        <div className="vision__container__contant__img">
          <img src={vision} alt="vision" />
        </div>
        <div className="vision__container__contant">
          <div className="vision__container__contant__heading">Our Vision</div>
          <div className="vision__container__contant__sub__heading">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus quis recusandae minima officia eligendi veniam fuga,
            quod perspiciatis quaerat quia.recusandae minima officia eligendi
            veniam fuga, quod perspiciatis quaerat quia. recusandae minima
            officia eligendi veniam fuga, quod perspiciatis quaerat quia.
          </div>
        </div>
      </div>
      <div className="j7team__container">
        <div className="j7__team__banner">
          <img src={j7team} alt="j7team" />
        </div>
        <div className="j7__team__banner__contant">
          <div className="j7__team__banner__text__heading">Our Team</div>
          <div className="j7__team__banner__imgs__wraper">
            <div className="j7__team__banner__img__card">
              <div className="j7__team__banner__img">
                <img src={rename} alt="logo" />
              </div>
              <div className="j7__team__text__container">
                <div className="j7__team__banner__img__name">ASIM</div>
                <div className="j7__team__banner__img__sub__name">Chairman</div>
              </div>
            </div>
            <div className="j7__team__banner__img__card">
              <div className="j7__team__banner__img">
                <img src={rename} alt="logo" />
              </div>
              <div className="j7__team__text__container">
                <div className="j7__team__banner__img__name">ASIM</div>
                <div className="j7__team__banner__img__sub__name">Chairman</div>
              </div>
            </div>
            <div className="j7__team__banner__img__card">
              <div className="j7__team__banner__img">
                <img src={rename} alt="logo" />
              </div>
              <div className="j7__team__text__container">
                <div className="j7__team__banner__img__name">ASIM</div>
                <div className="j7__team__banner__img__sub__name">Chairman</div>
              </div>
            </div>
            <div className="j7__team__banner__img__card">
              <div className="j7__team__banner__img">
                <img src={rename} alt="logo" />
              </div>
              <div className="j7__team__text__container">
                <div className="j7__team__banner__img__name">ASIM</div>
                <div className="j7__team__banner__img__sub__name">Chairman</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__main___container">
        <div className="footer__main___container__left">
          <div className="footer__main___container__left__map">
            <img src={map} alt="map" />
          </div>
        </div>
        <div className="footer__main___container__right">
          <div className="footer__container__right__contant">
            <div className="footer__container__uper__heading">
              <div className="footer__container__right__contant__heading">
                Get In Touch
              </div>
              <div className="footer__container__right__contant__sub__heading">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the
              </div>
            </div>
            <div className="footer__container__contact__form">
              <div className="footer__contant__input">
                <div className="footer__container__contact__form__input">
                  <input type="text" placeholder="First-Name" />
                </div>
                <div className="footer__container__contact__form__input">
                  <input type="text" placeholder="Last-Name" />
                </div>
              </div>
              <div className="footer__contant__input">
                <div className="footer__container__contact__form__input">
                  <input type="text" placeholder="E-mail" />
                </div>
                <div className="footer__container__contact__form__input">
                  <input type="text" placeholder="DOB" />
                </div>
              </div>
              <div className="footer__contant__input">
                <div className="footer__container__contact__form__input">
                  <input type="text" placeholder="Phone-No" />
                </div>
                <div className="footer__container__contact__form__input">
                  <input type="text" placeholder="Gender" />
                </div>
              </div>
              <div className="footer__container__contact__form__input">
                <input type="text" placeholder="Message" />
              </div>
              <button
                title="click here"
                className="footer__contant__submit__btn"
              >
                Submit
              </button>
            </div>
          </div>
          <div className="footer__container__right__contactus__wraper">
            <div className="footer__right__contactus__heading">Contact Us</div>
            <div className="footer__right__contactus__phone__and__mail">
              <div className="footer__right__contactus__phone__no">
                <span>Name</span> +92-3004575442
              </div>
              <div className="footer__right__contactus__email">
                <span>E-mail</span> asimrasheed442@gmail.com
              </div>
              <div className="footer__right__contactus__socail">
                <div className="footer__right__contactus__socail__heading">
                  Social Links
                </div>
                <div className="social__links__wraper">facebook</div>
                <div className="social__links__wraper">Instagram</div>
                <div className="social__links__wraper">Twitter</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
