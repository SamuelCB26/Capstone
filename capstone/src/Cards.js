import React, { Component } from 'react'
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const style1 = {display: "flex"};
const style2 = {flexWrap: "wrap"};
const style3 = {padding: "30px"};

class Cards extends Component {
    render(){
        return (
        <div style={{...style1, ...style2, ...style3}} className='bootstrap'>
            <Card 
            img="https://picsum.photos/id/10/200/150"
            title="Canada"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card 
            img="https://picsum.photos/id/1015/200/150"
            title="South America"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
            <Card 
            img="https://picsum.photos/id/1016/200/150"
            title="North America"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
            </div>
        );
    }
}

export default Cards;