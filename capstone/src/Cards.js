import React, { Component } from 'react'
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const style1 = {display: "flex"};
const style2 = {flexWrap: "wrap"};
const style3 = {padding: "20px"};

class Cards extends Component {
    render(){
        return (
        <div style={{...style1, ...style2, ...style3}} className='bootstrap'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            </div>
        );
    }
}

export default Cards;