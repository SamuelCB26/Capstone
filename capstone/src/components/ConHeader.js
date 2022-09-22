import React from 'react'
import { Link } from "react-router-dom";

const ConHeader = () => {
return (
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">ColourPal</h1>
            <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/Contact">Contact</Link>
            </nav>
        </div>
    </div>
)
}

export default ConHeader