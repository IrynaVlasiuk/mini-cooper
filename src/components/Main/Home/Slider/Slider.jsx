import React, { useEffect, useState, createContext } from "react";

import slider1 from "./assets/mini42.jpg";
import slider2 from "./assets/teaserminipitstop.jpg";
import slider3 from "./assets/mini-nova-poshta.jpg";

import Arrows from "./Controls/Arrows";
import Dots from "./Controls/Dots";

import SlidesList from "./SlidesList";

import style from "./Slider.module.css";

export const SliderContext = createContext();

const getWidth = () => window.innerWidth;

const Slider = function ({ width, height, autoPlay, autoPlayTime }) {

    const [slide, setSlide] = useState(0);
    const [touchPosition, setTouchPosition] = useState(null);
    const [translate, setTranslate] = useState(getWidth());

    const items = [{url:slider1}, {url:slider2}, {url:slider3}];

    const changeSlide = (direction = 1) => {
        let slideNumber = 0;

        if (slide + direction < 0) {
            console.log()
            slideNumber = items.length - 1;
        } else {
            slideNumber = (slide + direction) % items.length;
        }

        if (direction === 1) {
           setTranslate(translate + getWidth());
            setSlide(slide === items.length - 1 ? 0 : slide + 1);
        } else {
            setTranslate(0);
            setSlide(slide === 0 ? items.length - 1 : slide - 1);
        }
    };

    const goToSlide = (number) => {
        console.log(number % items.length);
        setSlide(number % items.length);
    };

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX;

        setTouchPosition(touchDown);
    }

    const handleTouchMove = (e) => {
        if (touchPosition === null) {
            return;
        }

        const currentPosition = e.touches[0].clientX;
        const direction = touchPosition - currentPosition;

        if (direction > 10) {
            changeSlide(1);
        }

        if (direction < -10) {
            changeSlide(-1);
        }

        setTouchPosition(null);
    }

    useEffect(() => {
        if (!autoPlay) return;

        const interval = setInterval(() => {
            changeSlide(1);
        }, autoPlayTime);

        return () => {
            clearInterval(interval);
        };
    }, [items.length, slide]); // when images uploaded or slide changed manually we start timer

    return (
        <div
            style={{ width, height }}
            className={style.slider}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <SliderContext.Provider
                value={{
                    goToSlide,
                    changeSlide,
                    slidesCount: items.length,
                    slideNumber: slide,
                    items,
                }}
            >
                <Arrows />
                <SlidesList
                    translate={translate}
                    slideWidth={getWidth()}
                />
                <Dots />
            </SliderContext.Provider>
        </div>
    );
};

Slider.defaultProps = {
    autoPlay: true,
    autoPlayTime: 1000,
    width: "100%",
    height: "100%"
};

export default Slider;

