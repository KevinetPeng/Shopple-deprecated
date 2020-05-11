import React from "react";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import SaleCardContainer from "./components/SaleCardContainer/SaleCardContainer";
import AdvancedSearch from "./components/AdvancedSearch/AdvancedSearch";
import AddSale from "./components/AddSale/AddSale";
import ToggleView from "./components/ToggleView/ToggleView";

function App(props) {
  const [showListView, setShowListView] = React.useState(true);

  const toggleViewCallback = (childListViewState) => {
    setShowListView(childListViewState);
  };

  return (
    <div>
      <AppBar />
      <div className="App">
        <AdvancedSearch />
        <SaleCardContainer sales={[1, 2, 3, 4, 5]} />
        <AddSale />
        <ToggleView parentCallback={toggleViewCallback} />
      </div>
    </div>
  );
}

export default App;
