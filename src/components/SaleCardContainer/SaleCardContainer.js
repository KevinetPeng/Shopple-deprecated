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

function SaleCardContainer(props) {
  const classes = useStyles();
  const sales = props.sales;
  const listItems = sales.map((sale) => (
    <React.Fragment key={sale.toString()}>
      {React.cloneElement(props.children, {
        companyName: "H&M",
        saleDescript:
          "Support your community and broaden your horizons by trying different restaurants in your neighbourhood. Get inspired by the cuisines highlighted below, and experience flavours from around the world in the comfort of your home* with a $0 Delivery Fee on orders of $20 or more.",
        saleAmount: "20% Off",
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
