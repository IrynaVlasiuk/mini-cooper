import React, { useContext } from "react";
import { SliderContext } from "../Slider";
import style from "./Arrows.module.css";

export default function Arrows() {
    const { changeSlide } = useContext(SliderContext);

    return (
        <div className={style.arrows}>
            <div className={style.arrowLeft} onClick={() => changeSlide(-1)} />
            <div className={style.arrowRight} onClick={() => changeSlide(1)} />
        </div>
    );
}