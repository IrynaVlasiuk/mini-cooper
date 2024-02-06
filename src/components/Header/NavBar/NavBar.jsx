import React from 'react';
import style from './NavBar.module.css';
import {NavLink} from 'react-router-dom';
import Modal from "./Modal/Modal";

const NavBar = (props) =>  {
    const menu = props.forNavBar;

    const [isModal, setModal] = React.useState(false);

    const [state, setstate] = React.useState({modalLinks: ""});

    const handlerClick = (links) => {
        setModal(true);
        setstate({modalLinks: links});
    };

    return (
        <>
        <nav className={`${props.isHome ? style.navBarWhite : style.navBarBlack}`}>
            <div className={style.header_link_block}>
                <button className={style.header_link} onClick={() => setModal(true)}>Моделі</button>
            </div>
            <div className={style.header_link_block}>
                <button className={style.header_link} onClick={() => setModal(true)}>Автомобілі</button>
            </div>
            <div className={style.header_link_block}>
                <button className={style.header_link}>Аксесуари</button>
            </div>
            <div className={style.header_link_block}>
                <button className={style.header_link}>Сервіс</button>
            </div>
            <div className={style.header_link_block}>
                <button className={style.header_link} onClick={() => handlerClick(menu.menu.newsLinks)}>Світ Mini</button>
            </div>
            <div className={style.header_link_block}>
                <button className={style.header_link}>Фінансування</button>
            </div>
            <div className={style.header_link_block}>
                <button className={style.header_link}>Прайс-лист</button>
            </div>
            <NavLink to='/contacts'>
                <div className={style.header_link_block}>
                    <button className={style.header_link}>Контакти</button>
                </div>
            </NavLink>
            <NavLink to='/reviews'>
                <div className={style.header_link_block}>
                    <button className={style.header_link}>Відгуки</button>
                </div>
            </NavLink>

            {/*<NavLink to='/projects'>Автомобілі</NavLink>*/}
            {/*<NavLink to='/services'>Аксесуари</NavLink>*/}
            {/*<NavLink to='/about'>Сервіс</NavLink>*/}
            {/*<NavLink to='/blog'>Світ Mini</NavLink>*/}
            {/*<NavLink to='/contact'>Фінансування</NavLink>*/}
            {/*<NavLink to='/contact'>Прайс-лист</NavLink>*/}
        </nav>
            <Modal
                isVisible={isModal}
                modalLinks={state.modalLinks}
                onClose={() => setModal(false)}
            />
         </>
    );
}

export default NavBar;
