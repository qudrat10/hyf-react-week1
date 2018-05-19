import React, {Component} from 'react';
import '../App.css'

export default class About extends Component{
    render(){
        return(
            <div  className="about-info">
            <h3><b><i>Personal Information</i></b></h3>
            <p className="part1-style"><b>Date of birth:</b> 01 Feb 1993 </p>
            <p className="part1-stle"> <b> Nationality:</b> Afghan</p>
            <p className="part1-style"><b>Status:</b> Single</p>
            </div>
        )
    }
}