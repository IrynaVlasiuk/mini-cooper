import React from 'react';
import Slider from 'react-animated-slider';
import horizontalCss from 'react-animated-slider/build/horizontal.css';
import style from './Slider.module.css';
import './Carousel.css';


const Carousel = (props) => {
    const { inViewport, forwardedRef, enterCount } = props;

    return (
        <Slider className="slider" autoplay={1000}>
            {props.slides.map((slide, index) => <div
                key={index}
            >
                <div className={style.mask}>
                    <img src={slide.image} className={style.slideImage} alt={slide.alt}/>
                </div>
                <div className="textBlock" >
                    <h2 className={style.title}>{slide.title}</h2>
                    <div className={style.description}>{slide.description}</div>
                </div>
            </div>)}
        </Slider>
    )
}

export default Carousel;
