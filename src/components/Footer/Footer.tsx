import React from "react";
import styles from "./Footer.module.css";
import * as data from "./icons.json";
const iconsString = JSON.stringify(data)
const icons = JSON.parse(iconsString).icons;

type Icon = {
    picture: string;
    href: string;
  };

const Icons: React.FC<{ links: Icon[] }> = ({ links }) => {
    return (
        <div className={styles['links-container']}>
            {links.map((link: Icon) => {
                return (
                    <div key={link.href} className={styles['link']}>
                        <a href={link.href} target="_blank" rel="noreferrer">
                            <img src={link.picture} alt=""></img>
                        </a>
                    </div>
                )
            })}
        </div>
    )
  };
  
  const Footer: React.FC<{}> = () => {
    return (
        <div className={styles.footer}>
            <Icons links={icons} />
            <p>Made with <span><img src="/images/heart.png" alt=""></img></span> in Furtwangen</p>
        </div>
    )
  }

  export default Footer;