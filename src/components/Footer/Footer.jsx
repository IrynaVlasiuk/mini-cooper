import style from './Footer.module.css';
import SocialLinks from "./SocialLinks/SocialLinks";
import ExchangeRate from "./ExchangeRate/ExchangeRate";
import ContactLinks from "./ContactLink/ContactLinks";

const Footer = (props) =>  {
    return (
        <footer className={style.footer}>
            <SocialLinks/>
            <ContactLinks/>
            <ExchangeRate/>
        </footer>
    );
}

export default Footer;
