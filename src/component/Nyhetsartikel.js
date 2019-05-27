import React from 'react';  


function Nyhetsartikel (props) {
return ( 
    <div className="grid">
    <article>
<img src={props.minArtikel.urlToImage}/>
    <h2>{props.minArtikel.title}</h2>
    <p>{props.minArtikel.description} </p>
    <a>Läs mer.. </a>
    </article> 
    </div>
);
}

export default Nyhetsartikel;