import React from "react";
import SlideTitle from "./SlideTitle";
import SlideImage from "./SlideImage";
import style from "./Slider.module.css";

export default function Slide({ data: { url, title } }) {
    console.log(url);
    return (
        <div className={style.slide}>
            <SlideImage src={url} alt={title} />
            <SlideTitle title={title} />
        </div>
    );
}