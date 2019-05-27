import React, { Component } from 'react';
import "./App.css";
import Nyhetslista from "./component/Nyhetslista";
class App extends Component {
constructor(props) {
super(props);
this.state = {
articles: [
  {
urIToImage: "https://source.unsplash.com/random/200×125/?furniture",
titel: "Test novelty 1",
description: "description of the test news",
},
 {
urlToImage: "https://source.unsplash.com/random/200×125/?furniture",
titel: "Test novelty 2",
description: "description of the seconds test news",
}]};
}
componentDidMount() {
    fetch ("https://newsapi.org/v2/top-headlines?country=se&apiKey=ae24bb6763034855bf26908e36dcd782" )
      .then(function (response) {
      // gör något med det som kom tillbaka
        if (response.status !==200) {
          throw Error( `state:${response.status}`);
        }
        return response.json()
    })
    .then( jsondata => {
      // gör något med json-objektet
      this.setState({ articles: jsondata.articles })
    })
    .catch (error=> {
    this.setState ({ 
        articles: [{
          urlToImage: "fejk.jpg ",
          titel: "något gick fel",
          description: `Något gick fel, ${error.message}`,
}]
});
})
} 

render() {
  return (
   <Nyhetslista
        minaArtiklar={this.state.articles} />
  );
  }
  }
export default App;
