import React, { Component } from 'react';
import WithFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import "./App.css";
import Nyhetslista from './component/Nyhetslista'


const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends Component {
  /* Ställ in komponentens startläge
Peka på det globala sammanhanget för det här sökordet.*/
  constructor(props) {
    super(props);
    this.state = {
      articles: []};
      }

  componentDidMount() {
    /* lägger in koden för nyhetsartiklar */
    fetch("https://newsapi.org/v2/top-headlines?country=se&apiKey=ae24bb6763034855bf26908e36dcd782")
      .then(function (response) {
        if (response.status !== 200) {
          throw Error( `status:${response.status}`);
        }
        // gör något med det som kom tillbaka
        return response.json()
      } ).then( jsondata => {
        /* gör något med json-objektet*/
        this.setState( { articles: jsondata.articles })
      }).catch( error =>{
        {/*setState är en funktion som i dess enklaste form tar ett argument, ett objekt.*/ }
        this.setState({
          articles: [{
            urlToImage: "fejk.jpg ",
            description: "Något gick fel, ${error.message}",
          }]
        });
      })
  }

  render() {
    const {
      user,
      signOut,
    SignInWithGoogle,
    } = this.props;
    return (
      <div className="App">
        <header className="App-header">
    <div>
        {
          // Knapp för att logga in och ut med Googel //         
            user
            ? <p>Hello, {user.displayName}</p>
            : <p>Please sign in.</p>
        }
 
        {
          user
            ? <button onClick={signOut}>Sign out</button>
            : <button onClick={SignInWithGoogle}>Sign in with Google</button>
        }

        </div>

      <h1>Dagens nyheter</h1>
      <h4 className="underrubrik">Här kan du läsa dagens nyheter</h4>
</header>

      <Nyhetslista
        /* rubrikomponent */
        minaArtiklar={this.state.articles} />
    </div>
    );
      }
    }
   const firebaseAppAuth = firebaseApp.auth();

  const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
  };
  
  export default WithFirebaseAuth({
    providers,
    firebaseAppAuth,
   })(App); 