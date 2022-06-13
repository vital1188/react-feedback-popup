import React, { Component } from "react";
import { render } from "react-dom";
import FeedBack from "./components/Feedback";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <FeedBack
          style={{ zIndex: "1", position: "fixed", left: "2px!" }}
          position="left"
          numberOfStars={5}
          headerText="Hello"
          bodyText="Custom Body test"
          buttonText="This is also custom"
          handleClose={() => console.log("handleclose")}
          handleSubmit={data =>
            fetch("https://formspree.io/xxxxxxx", {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              method: "POST", // or 'PUT'
              body: JSON.stringify(data)
            })
              .then(response => {
                if (!response.ok) {
                  return Promise.reject(
                    "Our servers are having issues! We couldn't send your feedback!"
                  );
                }
                response.json();
              })
              .then(() => {
                alert("Success!");
              })
              .catch(error => {
                alert(
                  "Our servers are having issues! We couldn't send your feedback!",
                  error
                );
              })
          }
          handleButtonClick={() => console.log("handleButtonClick")}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
