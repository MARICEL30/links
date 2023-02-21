import portrait from './images/portrait.jpg';
import React from 'react';
import './App.css';
import './App.js';


export default function Header() {
  
  const myLinks = [
      { name: "Website", link: "https://mariceldragan.com/", id: 1 },
      { name: "Articles", link: "https://medium.com/@mariaceliadragan", id: 2 },
      { name: "Projects", link: "https://github.com/MARICEL30", id: 3 },
      { name: "Experiments", link: "https://plasticfreeme.net/", id: 4 },
]



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
