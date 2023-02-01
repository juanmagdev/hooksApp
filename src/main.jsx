import React from "react";
import ReactDOM from "react-dom/client";
// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { HooksApp } from "./HooksApp";
import { FormWithCustomHooks } from "./02-useEffect/FormWithCustomHooks";

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormWithCustomHooks />
  </React.StrictMode>
)