import React from "react";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import SaleCardContainer from "./components/SaleCardContainer/SaleCardContainer";
import AdvancedSearch from "./components/AdvancedSearch/AdvancedSearch";
import AddSale from "./components/AddSale/AddSale";
import ToggleView from "./components/ToggleView/ToggleView";
import Fade from "@material-ui/core/Fade";
import NormalSaleCard from "./components/NormalSaleCard/NormalSaleCard";
import ThinSaleCard from "./components/ThinSaleCard/ThinSaleCard";

function App(props) {
  const [showListView, setShowListView] = React.useState(true);

  const toggleViewCallback = (childListViewState) => {
    setShowListView(childListViewState);
  };

  return (
    <>
      <AppBar />
      <div className="app-parent">
        <div className="app">
          <AdvancedSearch />
          <div className="space-left" />
          {!showListView && (
            <Fade in={!showListView} timeout={2000}>
              <SaleCardContainer sales={[1, 2, 3, 4, 5]}>
                <NormalSaleCard />
              </SaleCardContainer>
            </Fade>
          )}
          {showListView && (
            <Fade in={showListView} timeout={2000}>
              <SaleCardContainer
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
              >
                <ThinSaleCard />
              </SaleCardContainer>
            </Fade>
          )}
          <div className="space-left" />
          <ToggleView parentCallback={toggleViewCallback} />
          <div className="space-right" />
        </div>
        <AddSale />
      </div>
    </>
  );
}

export default App;
