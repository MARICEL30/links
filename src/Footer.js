import React from 'react';
import './App.css';
import './App.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons'

const instagramIcon = <FontAwesomeIcon icon={faInstagram} size="2x" color='#fff' />
const githubIcon = <FontAwesomeIcon icon={faGithub} size="2x" color='#fff'/>
const mediumIcon = <FontAwesomeIcon icon={faMedium} size="2x" color='#fff'/>
const twitterIcon = <FontAwesomeIcon icon={faTwitter} size="2x" color='#fff'/>

const socialMediaLinks = [
    { id: 1, icon: instagramIcon, link: "https://www.instagram.com/maricel_weblab/"},
    { id: 2, icon: githubIcon, link: "https://github.com/MARICEL30" },
    { id: 3, icon: mediumIcon, link: "https://medium.com/@mariaceliadragan" },
    { id: 4, icon: twitterIcon, link: "https://twitter.com/weblab_maricel" },

    ]

const socialMediaLinksIcons = socialMediaLinks.map(item =>
    <a href={item.link} target="_blank" rel="noopener noreferrer" key={item.id}><p>{item.icon}</p></a>);

    
export default function Footer() {

 return (
  <ul className="social-icons">
  <li>{socialMediaLinksIcons}</li>
  </ul>
 )};


