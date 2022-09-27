import React , { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const style1 = {width: '18rem'};
const style2 = {margin: '10px'};
const style3 = {flexGrow: '1'};

function CardExample(props) {
return (
    <Card className="card" style={{...style1, ...style2, ...style3}}>
    <Card.Img variant="top" src={props.img} />
    <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        {props.text}
        </Card.Text>
        <Button variant="primary">Discover More</Button>
    </Card.Body>
    </Card>
);
}

export default CardExample