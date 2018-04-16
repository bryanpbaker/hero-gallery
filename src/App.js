import React, { Component } from "react";
import "normalize.css";
import "./App.css";

class App extends Component {
  componentDidMount() {
    fetch(
      "https://gateway.marvel.com/v1/public/characters?nameStartsWith=Wolverine&apikey=1425b32d20159156ffcf8bf2b690d736"
    )
      .then(res => res.json())
      .then(response => console.log(response.data.results));
  }

  render() {
    return (
      <div className="App">
        <h1>Marvel Hero Gallery</h1>
      </div>
    );
  }
}

export default App;
