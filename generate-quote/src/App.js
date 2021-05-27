import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: null,
      randomQuote: null
    };
  }


  render() {
    return (
      <div className="App">
        <div className="quote">
          <button className="btn" onClick={this.randomQuoteHandler}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
