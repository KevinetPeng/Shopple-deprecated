import React from "react";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import SaleCardContainer from "./components/SaleCardContainer/SaleCardContainer";
import AdvancedSearch from "./components/AdvancedSearch/AdvancedSearch";

function App() {
  return (
    <div>
      <AppBar />
      <div className="App">
        <AdvancedSearch />
        <SaleCardContainer sales={[1, 2, 3, 4, 5]} />
      </div>
    </div>
  );
}

export default App;
