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
    { id: 1, icon: instagramIcon, href: "https://www.instagram.com/maricel_weblab/"},
    { id: 2, icon: githubIcon, href: "https://github.com/MARICEL30" },
    { id: 3, icon: mediumIcon, href: "https://medium.com/@mariaceliadragan" },
    { id: 4, icon: twitterIcon, href: "https://twitter.com/weblab_maricel" },

    ]

const socialMediaLinksIcons = socialMediaLinks.map(item =>
    <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={(event)=>  { event.preventDefault(); window.open(socialMediaLinks.href)}} key={item.id}><p>{item.icon}</p></a>);

    
export default function Footer() {

 return (
  <div className="social-icons">
  <p onClick={socialMediaLinksIcons}>{socialMediaLinksIcons}</p>
  </div>
 )};

