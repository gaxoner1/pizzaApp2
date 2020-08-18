import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

const Home = () => {
  return (
    <div className="center">
        <h1 className="menuHead">Pizza 42</h1>
        <Image src="https://images.bizbuysell.com/shared/listings/172/1727024/d227c519-ffe6-448b-8acb-46d7d9f68ee0-W768.jpg" fluid />
        <Button className= "homebtn" variant="warning">Sign In for secret Menu</Button>
        <Card>
          <Card.Img variant="top" src="./assests/pizza_slice.png" />
          <Card.Body>
            <Card.Title>Slices</Card.Title>
            <Card.Text>
              $1.99
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Pizza Pie</Card.Title>
            <Card.Text>
              $14.99{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="./public/logo192.png/100px160" />
          <Card.Body>
            <Card.Title>Craft Beer</Card.Title>
            <Card.Text>
              $8.00
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
    </div>
  );
}

export default Home;
