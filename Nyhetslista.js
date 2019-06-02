import React from 'react'; 
import Nyhetsartikel from  './Nyhetsartikel';
/*  omslagselement i HTML */
function Nyhetslista (props) {
    return ( <section className="grid">
    {props.minaArtiklar.map (
        function (item, index) {
            return <Nyhetsartikel
minArtikel = {item}
key = {`artikel${index}`} 
/>
    })}
</section>)
}
/* skapar JavaScript moduler för att exportera funktioner, objekt eller primitiva värden från modulen */ 
export default Nyhetslista; 