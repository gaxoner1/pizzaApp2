import React, { useState } from "react";
import "./views.css";
import Button from 'react-bootstrap/Button'
import { Card } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";


const Menu = () => {
  const mealItem = [
      {
        image: "https://i.pinimg.com/originals/cb/92/55/cb9255d9b76c4cacc38854a195b67357.jpg",
        title: "Pizza Cake",
        text: "$14.99",
      },
      {
        image: "https://cdn.broadsheet.com.au/cache/36/2d/362ddbc92eda4397626281a3cd727f97.jpg",
        title: "Pizza Beer",
        text: "$8.00",
      },
      {
        image: "https://pinchofyum.com/wp-content/uploads/Chopped-Salad-Pizza-Recipe.jpg",
        title: "Pizza Salad",
        text: "$8.99",
      },
      {
        image: "https://realfoodbydad.com/wp-content/uploads/2016/10/Waffled-Pizza-Fries-Real-Food-by-Dad-683x1024.jpg",
        title: "Pizza Fries",
        text: "$8.00",
      }
    ];


  const renderMenu = (item, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Img variant="top" src="holder.js/100px180" src={item.image} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.text}</Card.Text>
          {/* <Button variant="primary">Order</Button>*/}
        </Card.Body>
      </Card>
    );
  };

  return <div className="mealGrid">{mealItem.map(renderMenu)}</div>;
};

export default Menu;
