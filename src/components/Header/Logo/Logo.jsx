import style from './Logo.module.css';
import logo from './../../../assets/logo.png';
import {NavLink} from "react-router-dom";

const Logo = (props) => {
    return (
        <NavLink to='/'>
            <div className={style.logo}>
                <img src={logo} alt='mini_cooper_logo'/>
            </div>
        </NavLink>
    );
}

export default Logo;


