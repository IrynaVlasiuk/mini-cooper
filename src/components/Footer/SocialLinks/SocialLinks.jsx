import React from 'react';
import style from './SocialLinks.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLinks = (props) =>  {
    return (
       <div className={style.socialList}>
            <div>
                <FontAwesomeIcon icon="fa-brands fa-facebook" href={""} size="2x" className={style.icon} />
            </div>
           <div>
               <FontAwesomeIcon icon="fa-brands fa-instagram" href={""} size="2x" className={style.icon} />
           </div>
       </div>
    );
}

export default SocialLinks;
