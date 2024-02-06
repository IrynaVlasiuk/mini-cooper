import React from 'react';
import style from './ContactLinks.module.css';
import {NavLink} from "react-router-dom";


const ContactLinks = (props) =>  {
    return (
       <div className={style.contactList}>
           <NavLink to='/contacts'>
               <p className={style.contact_link}>Контакти</p>
           </NavLink>
       </div>
    );
}

export default ContactLinks;
