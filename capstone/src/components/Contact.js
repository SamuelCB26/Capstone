import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Contact = () => {
return (
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
        <h1 class="display-4">Contact</h1>
        <nav>
    <Link to="/">Home</Link> |{" "}
    <Link to="/Contact">Contact</Link>
    </nav>
    </div>
    </div>
)
}

export default Contact