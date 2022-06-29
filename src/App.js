import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <main>
        <Dictionary />
      </main>
      <footer>
        <div>
          Open-sourced on{" "}
          <a href="https://github.com/shouedpro/react-dictionary-project">
            GitHub
          </a>
        </div>
        <div>
          Hosted on{" "}
          <a href="https://jade-mousse-23b161.netlify.app/">Netlify</a>
        </div>
      </footer>
    </div>
  );
}
