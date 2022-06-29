import React from "react";
import "./Phonetics.css";

export default function Phonetic(props) {
  return (
    <span className="Phonetics">
      <span class="row">
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noreferrer"
          className="listen"
        >
          Listen
        </a>
        <p className="text col">
          {""}
          {props.phonetic.text}
        </p>
      </span>
    </span>
  );
}
