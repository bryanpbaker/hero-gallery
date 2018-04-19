import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "mobx-react";
import HeroStore from "./stores/HeroStore";

ReactDOM.render(
  <Provider HeroStore={HeroStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
