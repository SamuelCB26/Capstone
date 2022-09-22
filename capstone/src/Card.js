import React , { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const style1 = {width: '18rem'};
const style2 = {margin: '10px'};
const style3 = {flexGrow: '1'};

function CardExample() {
return (
    <Card style={{...style1, ...style2, ...style3}}>
    <Card.Img variant="top" src="https://picsum.photos/seed/picsum/150/100" />
    <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>
);
}

export default CardExample