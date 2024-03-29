import portrait from './images/portrait.jpg';
import React from 'react';
import './App.css';
import './App.js';

const myLinks = [
  { id: 1, name: "Website", link: "https://mariceldragan.com/" },
  { id: 2, name: "Articles", link: "https://medium.com/@mariaceliadragan" },
  { id: 3, name: "Projects", link: "https://github.com/MARICEL30" },
  { id: 4, name: "Experiments", link: "https://plasticfreeme.net/" },
]


export default function Header() {
  
   const listItems = myLinks.map(item => 
        <a href={item.link}  target="_blank" rel="noopener noreferrer"><li  className="list" key={item.id}> {item.name} </li> </a>
      
   );


    return (
            <header className="App-header">
              <article className="Art-container">
                 <img src={portrait} className="App-icon" alt="icon" />
                <h2 className="App-Name"> Maricel Dragan</h2>
              </article>
                <section className="App-list">
                  <ul className="List-container">
                   {listItems} 
                   </ul>
                 </section>
             </header>  
        
    );
}
