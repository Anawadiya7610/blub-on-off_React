import React from "react";
import { useState, useEffect } from "react";
import BlubOn from "./photo/blubon.jpg";
import BlubOff from "./photo/bluboff.jpg";
import "./photo/styles.css";

let blubArr = [
  { classes: "imagesBlub", condition: "Off", src: BlubOff, id: "one" },
  { classes: "imagesBlub", condition: "Off", src: BlubOff, id: "two" },
  { classes: "imagesBlub", condition: "Off", src: BlubOff, id: "three" },
  { classes: "imagesBlub", condition: "Off", src: BlubOff, id: "four" },
  { classes: "imagesBlub", condition: "Off", src: BlubOff, id: "five" },
];

export default function Blub() {
  const [img, setImg] = useState(BlubOff);
  const [btnText,setBtnText] = useState("On")
  const [text, setText] = useState("Off");
  let imgClass = document.getElementsByClassName("imagesBlub");

  const handleChange = () => {
    if (text == "Off") {
      setImg(BlubOn);
      setText("On");
      setBtnText("Off");
    } else {
      setImg(BlubOff);
      setText("Off");
      setBtnText("On");
    }
  };



  return (
    <div className="blub_head">
      <div className="head">
        {blubArr.map((el, index) => {
          return (
            <div key={el.id}>
              <img
                id={el.id}
                className="imagesBlub"
                src={img}
                alt="image not found"
              ></img>
              <h5 className="textCenter" id={el.id}>Blub IS {text}</h5>
            </div>
          );
        })}
      </div>
      <div className="btn_div">
        <div className="btn-div1">
          <button onClick={handleChange} className="btn">
            Press For {btnText}
          </button>
        </div>
      </div>
    </div>
  );
}
