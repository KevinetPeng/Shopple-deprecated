import React from "react";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import SaleCardContainer from "./components/SaleCardContainer/SaleCardContainer";
import AdvancedSearch from "./components/AdvancedSearch/AdvancedSearch";
import AddSale from "./components/AddSale/AddSale";
import ToggleView from "./components/ToggleView/ToggleView";
import SaleListContainer from "./components/SaleListContainer/SaleListContainer";
import Fade from "@material-ui/core/Fade";

function App(props) {
  const [showListView, setShowListView] = React.useState(true);

  const toggleViewCallback = (childListViewState) => {
    setShowListView(childListViewState);
  };

  return (
    <div>
      <AppBar />
      <div className="app-parent">
        <div className="app">
          <AdvancedSearch />
          <div className="space-left" />
          {!showListView && (
            <Fade in={!showListView} timeout={2000}>
              <SaleCardContainer sales={[1, 2, 3, 4, 5]} />
            </Fade>
          )}
          {showListView && (
            <Fade in={showListView} timeout={2000}>
              <SaleListContainer
                sales={[
                  1,
                  2,
                  3,
                  4,
                  5,
                  "sale",
                  "cool",
                  true,
                  7,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                ]}
              />
            </Fade>
          )}
          <div className="space-left" />
          <ToggleView parentCallback={toggleViewCallback} />
          <div className="space-right" />
        </div>
        <AddSale />
      </div>
    </div>
  );
}

export default App;
