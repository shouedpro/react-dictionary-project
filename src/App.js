import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <h1>Dictionary</h1>
      <main>
        <Dictionary defaultKeyword="star" />
      </main>
      <footer>
        <div>
          Created by Shoko - Open-sourced on{" "}
          <a href="https://github.com/shouedpro/react-dictionary-project">
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="https://jade-mousse-23b161.netlify.app/">Netlify</a>
        </div>
      </footer>
    </div>
  );
}
