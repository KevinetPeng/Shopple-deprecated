import React from "react";
import "./NormalSaleCard.css";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

function NormalSaleCard(props) {
  return (
    <Card>
      <div className="cardContent">
        <CardMedia
          className="companyPic"
          image="https://www.hm.com/entrance/assets/bundle/img/HM-Share-Image.jpg"
          title="Contemplative Reptile"
        />
        <div>
          <Typography variant="h5" color="primary" gutterBottom>
            {props.companyName}
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            {props.saleDescript}
          </Typography>
          <Typography className="saleAmount" color="textSecondary" gutterBottom>
            {props.saleAmount}
          </Typography>
        </div>
      </div>
    </Card>
  );
}

export default NormalSaleCard;
