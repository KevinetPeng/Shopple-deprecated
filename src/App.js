import React from "react";
import "./App.css";
import AppBar from "./components/AppBar";
import SaleCardContainer from "./components/SaleCardContainer/SaleCardContainer";

function App() {
  return (
    <div className="App">
      <AppBar />
      <SaleCardContainer sales={[1, 2, 3, 4, 5]} />
    </div>
  );
}

export default App;
