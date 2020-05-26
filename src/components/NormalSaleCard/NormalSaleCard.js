import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  root: {
    marginBottom: 12,
    width: 790,
    height: 140,
    borderRadius: 4,
    border: "1px solid #DDE3E6",
    boxShadow: "1px 1px 2px  rgba(150, 150, 250, 0.15)",
    padding: 32,
    paddingTop: 16,
    paddingBottom: 8,
    display: "flex",
    flexDirection: "row",
    "&:hover": {
      boxShadow: "1px 1px 2px  rgba(150, 150, 250, 0.35)",
      border: "1px solid #b8b8b8",
    },
    cursor: "pointer",
  },
  companyPic: {
    width: 270,
    marginRight: 30,
  },
  companyName: {
    color: "#444444",
  },
});

function NormalSaleCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.companyPic}
        image="https://www.hm.com/entrance/assets/bundle/img/HM-Share-Image.jpg"
        title="H&M"
      />
      <div>
        <Typography
          className={classes.companyName}
          variant="h5"
          color="primary"
          align="left"
          gutterBottom
        >
          {props.companyName}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          align="justify"
          gutterBottom
        >
          {props.saleDescript}
        </Typography>
        <Typography variant="body2" color="Secondary" align="left" gutterBottom>
          {props.saleAmount}
        </Typography>
      </div>
    </Card>
  );
}

export default NormalSaleCard;
