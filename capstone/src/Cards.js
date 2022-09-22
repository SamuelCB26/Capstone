import React, { Component } from 'react'
import { faker } from '@faker-js/faker';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class Cards extends Component {
    render(){
        return (
        <div className='bootstrap'>
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