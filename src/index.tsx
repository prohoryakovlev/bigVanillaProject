import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {splitInterWords, sum} from './01-hello-test/01';
import User from "./01-hello-test/05/06-collbacks";

const sentense = "Hello my friends"
const result = splitInterWords(sentense)
console.log(result)


console.log(result[0] == "hello")
console.log(result[1] == "my")
console.log(result[2] == "friend")

var a = sum;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <User />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
