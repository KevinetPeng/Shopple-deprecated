import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  root: {
    paddingInlineStart: 0,
    width: "fit-content",
    height: "89vh",
    overflowY: "auto",
    overflowX: "hidden",
    paddingRight: 16,
  },
});

/* Scrollable container used to contain normal sale cards and thin sale cards */

function SaleCardContainer(props) {
  const classes = useStyles();
  const sales = props.sales;
  const listItems = sales.map((sale) => (
    <React.Fragment key={sale._id}>
      {React.cloneElement(props.children, {
        companyName: sale.company,
        saleDescript: sale.description,
        saleAmount: sale.amount,
      })}
    </React.Fragment>
  ));
  return (
    <ul {...props} className={classes.root}>
      {listItems}
    </ul>
  );
}

export default SaleCardContainer;
