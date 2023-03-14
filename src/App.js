import React, { Component, useState } from "react";
import hi from "./hi.PNG";
import computer from "./computer.PNG";
import realistic from "./realistic.PNG";
import orderly from "./orderly.PNG";
import loyal from "./loyal.PNG";
import why from "./why.PNG";
import logic from "./logic.PNG";
import truth from "./truth.PNG";
import quality from "./quality.PNG";
import overthinker from "./overthinker.PNG";
import independent from "./independent.PNG";
import knowledge from "./knowledge.PNG";
import teaching from "./teaching.PNG";
import "./App.css";

export default function App(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <header className="App-header">
        <img src={computer} className="App-logo" alt="logo" />

        <h1 className="App-title">
          <span class="title-word title-word-1">My </span>
          <span class="title-word title-word-2">Leadership </span>
          <span class="title-word title-word-3">Board </span>
        </h1>
      </header>

      <div id="MBTI" className="Section1">
        <h1 className="testTitle">MBTI: ISTJ</h1>
        <div className="Card-row">
          <div className="bitmojis">
            <img src={realistic} className="App-bitmoji" />
            <h3 className="bitmojiTitle">Realistic</h3>
          </div>
          <div className="bitmojis">
            <img src={orderly} className="App-bitmoji" />
            <h3 className="bitmojiTitle">Orderly</h3>
          </div>
          <div className="bitmojis">
            <img src={loyal} className="App-bitmoji" />
            <h3 className="bitmojiTitle">Loyal</h3>
          </div>
        </div>
      </div>

      <div id="fiveVoices" className="Section2">
        <h1 className="testTitle">Five Voices: Guardian</h1>
        <div className="Card-row">
          <div className="bitmojis">
            <img src={why} className="App-bitmoji" />
            <h3 className="bitmojiTitle">Ask Questions</h3>
          </div>
          <div className="bitmojis">
            <img src={truth} className="App-bitmoji" />
            <h3 className="bitmojiTitle">Truth over Feelings</h3>
          </div>
          <div className="bitmojis">
            <img src={logic} className="App-bitmoji" />
            <h3 className="bitmojiTitle">Value Logic</h3>
          </div>
        </div>
      </div>

      <div id="DISC" className="Section3">
        <h1 className="testTitle">DISC: C</h1>
        <div className="Card-row">
          <div className="bitmojis">
            <img src={quality} className="App-bitmoji" />
            <h3 className="bitmojiTitle">Quality Control</h3>
          </div>
          <div className="bitmojis">
            <img src={overthinker} className="App-bitmoji" />
            <h3 className="bitmojiTitle">Analyzer</h3>
          </div>
          <div className="bitmojis">
            <img src={independent} className="App-bitmoji" />
            <h3 className="bitmojiTitle">independent</h3>
          </div>
        </div>
      </div>

      <div id="spiritualGifts" className="Section4">
        <h1 className="testTitle">Spiritual Gifts</h1>
        <div className="Card-row">
          <div className="bitmojis">
            <img src={knowledge} className="App-bitmoji" />
            <h3 className="bitmojiTitle">knowledge</h3>
          </div>
          <div className="bitmojis">
            <img src={teaching} className="App-bitmoji" />
            <h3 className="bitmojiTitle">Teaching</h3>
          </div>
        </div>
      </div>
      <div className="Section5"></div>
      <p>Thanks for being here. </p>
    </div>
  );
}
