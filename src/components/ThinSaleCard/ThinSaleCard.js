import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  root: {
    marginBottom: 4,
    width: 846,
    height: 40,
    borderRadius: 4,
    border: "1px solid #DDE3E6",
    boxShadow: "1px 1px 2px  rgba(150, 150, 250, 0.15)",
    padding: "4px 8px 4px 0px",
    display: "flex",
    flexDirection: "row",
  },
  companyPic: {
    width: 200,
    marginRight: 0,
  },
  saleDescript: {
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  saleAmount: {
    marginLeft: 8,
  },
  companyName: {
    justifySelf: "left",
  },
  mainText: {
    textAlign: "left",
  },
});

function ThinSaleCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.companyPic}
        image="https://www.hm.com/entrance/assets/bundle/img/HM-Share-Image.jpg"
        title="H&M"
      />
      <div className={classes.mainText}>
        <Typography
          variant="h7"
          color="primary"
          align="left"
          className={classes.companyName}
        >
          {props.companyName}
        </Typography>
        <Typography
          className={classes.saleDescript}
          variant="body2"
          color="textSecondary"
          align="justify"
          gutterBottom
        >
          {props.saleDescript}
        </Typography>
      </div>
      <Typography
        className={classes.saleAmount}
        variant="body2"
        color="Secondary"
        align="left"
        gutterBottom
      >
        {props.saleAmount}
      </Typography>
    </Card>
  );
}

export default ThinSaleCard;
