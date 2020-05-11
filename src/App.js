import React from "react";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import SaleCardContainer from "./components/SaleCardContainer/SaleCardContainer";
import AdvancedSearch from "./components/AdvancedSearch/AdvancedSearch";

function App() {
  return (
    <div>
      <AppBar />
      <div className="app-parent">
        <div className="app">
          <AdvancedSearch />
          <div className="space-left" />
          <SaleCardContainer sales={[1, 2, 3, 4, 5]} />
          <div className="space-right" />
        </div>
      </div>
    </div>
  );
}

export default App;
