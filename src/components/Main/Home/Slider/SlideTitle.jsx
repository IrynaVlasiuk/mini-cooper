import React from "react";
import style from "./Slider.module.css";

export default function SlideTitle({ title }) {
    return <div className={style.slideTitle}>{title}</div>;
}