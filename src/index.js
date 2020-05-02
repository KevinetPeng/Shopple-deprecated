import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NormalSaleCard from "./components/NormalSaleCard/NormalSaleCard";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <NormalSaleCard
      companyName="H&M"
      saleDescript="
      Support your community and broaden your horizons by trying different restaurants in your neighbourhood. Get inspired by the cuisines highlighted below, and experience flavours from around the world in the comfort of your home* with a $0 Delivery Fee on orders of $20 or more."
      saleAmount="20% Off"
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
