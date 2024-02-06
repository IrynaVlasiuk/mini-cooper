import React from 'react';
import style from './Header.module.css';
import Logo from "./Logo/Logo";
import NavBar from "./NavBar/NavBar";
import {useLocation} from "react-router-dom";

const Header = (props) =>  {
    const { pathname } = useLocation();

    const isHome = pathname === '/';

    return (
        <header className={style.header} style={{position : isHome ? 'absolute' : 'unset'}}>
            <Logo/>
            <NavBar forNavBar={props.forHeader} isHome={isHome}/>
        </header>
    );
}

export default Header;
