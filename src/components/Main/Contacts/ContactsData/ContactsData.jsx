import React from 'react';
import style from './ContactsData.module.css';

const ContactsData = (props) =>  {
    const contacts = props.contacts;

    return (
        <div className={style.contactsData}>
            <h1 className={style.title}>Наша адреса та контакти</h1>
            <div className={style.contacts_info}>
                <div className={style.contact_line}>
                    <span className={style.bold}>Адреса:</span>
                    <span>{contacts.address}</span>
                </div>
                <div className={style.contact_line}>
                    <span className={style.bold}>e-mail:</span>
                    <span>{contacts.email}</span>
                </div>
                <br/>
                <div className={style.contact_line}>
                    <span className={style.bold}>Графік роботи:</span>
                </div>
                {contacts.schedules.map((obj, index) => (
                    <div className={style.contact_line} key={index}>
                        <span className={style.bold}>• {obj.office}:</span>
                        <span>{obj.schedule}</span>
                    </div>
                ))}
                <br/>
                {contacts.phones.map((obj, index) => (
                    <div className={style.contact_line} key={index}>
                        <span className={style.bold}>{obj.name}:</span>
                        <span>{obj.phone}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ContactsData;
