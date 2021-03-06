import React from "react";
import "./App.css";

import Counter from "./components/Counter";
import SingleQuote from "./components/SingleQuote";
import QuoteList from "./components/QuoteList";
import ValidationForm from "./components/ValidationForm";

function App() {
  return (
    <div className="App">
      <h1>Hello from create react app</h1>

      <h3>Quotes List 1</h3>
      <QuoteList
        quotes={[
          "Born too early to explore the galaxy. Born too late to explore the earth. Born just in time to browse dank memes.",
          "I'll study later.",
          "I'm leaving the house right now.",
        ]}
      />

      <h3>Quotes List 2</h3>
      <QuoteList quotes={["Quote 1", "Quote 2", "Quote 3"]} />
      <hr />
      {/* children go in between opening and closing tags just like in HTML */}
      <SingleQuote prop1="val1" prop2="val2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
        molestias est temporibus amet, commodi nemo aspernatur dignissimos
        blanditiis veritatis cupiditate numquam earum dolorum debitis
        necessitatibus officiis doloribus quasi aliquid sequi{" "}
        <span>a child span...</span>
      </SingleQuote>

      {/* <Counter></Counter> */}
      {/* <Counter someProp="someValue" /> */}

      {/* <button
        id="btn"
        onClick={() => {
          console.log("clicked!");
        }}
      >
        Click Me!
      </button> */}
    </div>
  );
}

export default App;
