import React from 'react';
import Carousel from "./Carousel/Carousel";
import Border from "./Border/Border";

const Banner = (props) =>  {
    return (
        <>
            <Carousel slides={props.slides}/>
            <Border/>
        </>
    );
}

export default Banner;
