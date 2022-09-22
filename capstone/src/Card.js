import React , { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'

function CardExample() {
return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
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