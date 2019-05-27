import React from "react";
import ReactDOM from 'react-dom';
import  "./index.css";
import app from './App';
import * as serviceWorker from  './serviceWorker';

ReactDOM.render( <App/>, document.getElementById( 'root' ));

// Om du vill att din app ska fungera offline och ladda snabbare, kan du ändra
//  avregistrera () för att registrera () nedan. Observera att detta kommer med några fallgropar.
// Läs mer om servicearbetare: https://bit.ly/CRA-PWA
serviceWorker.avregistrera ();


