import React from 'react';
import style from './Modal.module.css';
import {NavLink} from 'react-router-dom';

const Modal = (props) => {

    const keydownHandler = ({ key }) => {
        switch (key) {
            case 'Escape':
                props.onClose();
                break;
            default:
        }
    };

    React.useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
    });

    let isVisible = props.isVisible ? props.isVisible : false;

    const modalLinksElement = isVisible ?
        props.modalLinks.map((link, key) => <NavLink key={key} to={link.to} onClick={props.onClose}>{link.name}</NavLink>)
        : '';

    return !isVisible ? null : (
        <div className={style.modalContainer}>
            <div className={style.modal_dialog} onClick={e => e.stopPropagation()}>
                <div className={style.modal_header}>
                    <span className={style.modal_close} onClick={props.onClose}>&times;</span>
                </div>
                <div className={style.modal_body}>
                    <div className={style.links}>
                        { modalLinksElement }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;