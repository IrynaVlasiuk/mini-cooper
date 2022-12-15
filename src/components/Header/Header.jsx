import React from 'react';
import style from './Header.module.css';
import Logo from "./Logo/Logo";
import NavBar from "./NavBar/NavBar";

const Header = (props) =>  {
    return (
        <header className={style.header}>
            <Logo/>
            <NavBar forNavBar={props.forHeader}/>
        </header>
    );
}

export default Header;
