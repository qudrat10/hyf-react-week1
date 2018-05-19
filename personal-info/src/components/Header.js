import React, {Component} from 'react';
import '../App.css'

import { 
    BrowserRouter as Router,
     Route, 
     Link } from "react-router-dom";

export default class Header extends Component{
    render(){
        return(
            <div align="center" className="page-header">
            <h1>Qudratullah Ahmadi</h1>
            <Link to="/" className="col-4">Home</Link>
            <Link to="/Projects" className="col-4">About</Link>
            <Link to="/Contact" className="col-4">Contact</Link>
            </div>
        )
    }
}