import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-left">
          <img
            className="image"
            alt="profile"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTURpbzTRCeuOGMyYZbtuNnrjDac4nI5MJM0Q45BEEqEu6y9uc6Gg"
          />
          <h1>Sara Watson</h1>
          <h2>About</h2>
          <p>Lorem ipsumkfjdlkajklfjlkjfkldjklaj kljlfkeajl kjkljfkla jkjk fjkej kljl</p>
          <p>Lorem ipsumkfjdlkajklfjlkjfkldjklaj kljlfkeajl kjkljfkla jkjk fjkej kljl</p>
          <p>Lorem ipsumkfjdlkajklfjlkjfkldjklaj kljlfkeajl kjkljfkla jkjk fjkej kljl</p>
          <p>Lorem ipsumkfjdlkajklfjlkjfkldjklaj kljlfkeajl kjkljfkla jkjk fjkej kljl</p>
        </div>
        <div className="app-right">
          <h2 className="title">Experiences</h2>
          <h2 className="title">Educations</h2>
          <h2 className="title">Hobbies</h2>
        </div>
      </div>
    );
  }
}

export default App;
