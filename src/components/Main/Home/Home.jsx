import React from 'react';
import style from './Home.module.css';
import Cars from "./Cars/Cars";
import Banner from "./Banner/Banner";

const Home = (props) =>  {
    return (
        <div className={style.home}>
            <Banner slides={props.forHome.slides} />
            <Cars/>
        </div>
    );
}

export default Home;
