import React from 'react';  


function Nyhetsartikel (props) {
return ( 
    <div className="grid">
        {/*använder grid*/}
    <article>
        {/* lägger in mina bilder så att de ska synas*/}
<img src={props.minArtikel.urlToImage} className="bilder" alt=""></img>
{/* lägger in mina rubriker */}
    <h2 className="rubriker">{props.minArtikel.title}</h2>
    <p>{props.minArtikel.description} </p>
    {/* lägger in en länk*/}
    <a href={props.minArtikel.url}  target="">Läs mer.. </a>
    </article> 
    </div>
);
}

export default Nyhetsartikel;