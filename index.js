import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Disappearing_Tweets from "./Disappearing_Tweets";
  
var destination = document.querySelector("#container")
  
ReactDOM.render(
    <div>
        <Disappearing_Tweets/>
        
    </div>,
    destination
);