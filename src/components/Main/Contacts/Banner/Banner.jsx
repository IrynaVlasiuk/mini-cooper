import React from 'react';
import style from './Banner.module.css';
import banner from './../../../../assets/contacts/banner.jpg';

const Banner = (props) =>  {
    return (
        <div className={style.banner}>
            <img src={banner} alt='banner'/>
            <div className={style.border}></div>
        </div>
    );
}

export default Banner;
