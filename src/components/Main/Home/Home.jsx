import React from 'react';
import style from './Home.module.css';
import Slider from "./Slider/Slider";

const Home = (props) =>  {
    return (
        <div className={style.home}>
            <Slider/>
        </div>
    );
}

export default Home;
