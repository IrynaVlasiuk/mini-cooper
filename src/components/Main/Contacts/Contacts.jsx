import React from 'react';
import style from './Contacts.module.css';
import Banner from "./Banner/Banner";
import ContactsData from "./ContactsData/ContactsData";


const Contacts = (props) =>  {
    return (
        <div className={style.contacts}>
            <Banner/>
            <ContactsData contacts={props.contacts}/>
        </div>
    );
}

export default Contacts;
