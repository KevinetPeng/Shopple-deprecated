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
import Axios from "axios";



/* Main component that renders the app */

function App(props) {
  const [showListView, setShowListView] = React.useState(true);
  const [saleList, setSaleList] = React.useState([]);

  //useEffect to make get request to backend to retreive list of sales objects
  React.useEffect(() => {
    Axios.get(process.env.REACT_APP_BACKEND_URL + "/sales").then((response) => {
      setSaleList(response.data);
    });
  }, []);

  //print sale list
  console.log(saleList);

  //toggle list view callback function
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
            <Fade in={!showListView} timeout={500}>
              <SaleCardContainer sales={saleList} key="NormalView">
                <NormalSaleCard />
              </SaleCardContainer>
            </Fade>
          )}
          {showListView && (
            <Fade in={showListView} timeout={500}>
              <SaleCardContainer sales={saleList} key="ThinView">
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
