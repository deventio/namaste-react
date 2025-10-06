import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div", 
    {id:"parent", key: 5},  
    [React.createElement("div", {id:"child", key: 7 }, 
       [React.createElement("h1", { key: 1}, "I am H1 tag!"), 
        React.createElement("h2", {key: 2}, "I am H2 tag!")]
    ), 
    React.createElement("div", {id:"child2", key: 8 }, 
       [React.createElement("h1", {key: 3}, "I am H1 tag!"), 
        React.createElement("h2", {key: 4}, "I am H2 tag!")]
    )
    ]);


const heading = React.createElement("h1", {
id: "heading",
xyz : "abc",
key: 6

}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);