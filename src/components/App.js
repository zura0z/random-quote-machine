import React from "react";
import axios from "axios";
import "../App.css";

const transTime = "600ms";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
      color: "",
    };
  }

  getColor = () => {
    let color = [
      "#FF6633",
      "#FFB399",
      "#FF33FF",
      "#FFFF99",
      "#00B3E6",
      "#E6B333",
      "#3366E6",
      "#999966",
      "#99FF99",
      "#B34D4D",
      "#80B300",
      "#809900",
      "#E6B3B3",
      "#6680B3",
      "#66991A",
      "#FF99E6",
      "#CCFF1A",
      "#FF1A66",
      "#E6331A",
      "#33FFCC",
      "#66994D",
      "#B366CC",
      "#4D8000",
      "#B33300",
      "#CC80CC",
      "#66664D",
      "#991AFF",
      "#E666FF",
      "#4DB3FF",
      "#1AB399",
      "#E666B3",
      "#33991A",
      "#CC9999",
      "#B3B31A",
      "#00E680",
      "#4D8066",
      "#809980",
      "#E6FF80",
      "#1AFF33",
      "#999933",
      "#FF3380",
      "#CCCC00",
      "#66E64D",
      "#4D80CC",
      "#9900B3",
      "#E64D66",
      "#4DB380",
      "#FF4D4D",
      "#99E6E6",
      "#6666FF",
    ];
    let randomNum = Math.floor(Math.random() * color.length);

    return color[randomNum];
  };

  getQuote = () => {
    let url =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

    axios.get(url).then((res) => {
      let randomNum = Math.floor(Math.random() * 102);
      let quote = res.data.quotes[randomNum]["quote"];
      let author = res.data.quotes[randomNum]["author"];

      this.setState({ quote: quote, author: author, color: this.getColor() });
    });
  };

  componentDidMount() {
    this.getQuote();
  }

  render() {
    return (
      <main
        style={{ backgroundColor: this.state.color, transition: transTime }}
        id="quote-box"
      >
        <div className="main">
          <div className="container">
            <div id="text" className="quote">
              <i
                style={{ color: this.state.color, transition: transTime }}
                className="fas fa-quote-left"
              ></i>
              <p style={{ color: this.state.color, transition: transTime }}>
                {this.state.quote}
              </p>
            </div>
            <div id="author" className="author">
              <p style={{ color: this.state.color, transition: transTime }}>
                - {this.state.author}
              </p>
            </div>
          </div>
          <div className="buttons">
            <button
              style={{ backgroundColor: this.state.color, transition: transTime }}
              id="new-quote"
              onClick={() => this.getQuote()}
            >
              New Quote
            </button>
            <a
              style={{ backgroundColor: this.state.color, transition: transTime }}
              href="https://www.twitter.com/intent/tweet"
              target="#"
              id="tweet-quote"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
