import React, {Component} from 'react';
import '../App.css'

export default class Projects extends Component{
    render(){
        return(
            <div className="project-page">
            <div className="col-5">
            <h4>PERSONAL STATEMENT:</h4>
            <p id="info">I am a mature, positive and hardworking individual, who always strives to achieve the highest standard possible, at any given task. I have high computer program skills. 
                        I enjoy learning new things, I can work very well under pressure and I have experience working as a English translator and database enrolling and can handle solving problematic situation.</p>
            </div>

            <div className="col-5">
            <h4>ACADEMIC BACKGROUND:</h4>
            <table cellpadding="6%" >
        <th>Subject:</th>
        <th>Institute:</th>
        <th>Year of Completion:</th>
        <tr>
         <td><b> CCNA</b> (Cisco Certified Network Associate)</td>  
         <td> Behzad Technology Institute</td>  
         <td> 2011(Feb-Jun)</td>
        </tr>
            <tr>
               <td><b>MCITP</b> (Microsoft Certified IT Profession)</td>
               <td>BehZad Technology Institute</td>
               <td>2010 (July-Nov)</td>
               </tr>

               <tr>
                   <td><b>ICDL</b> (Internataionl computer Driving Licence)</td>
                   <td>Behzad Technology Institute</td>
                   <td>2010 (March-June)</td>
            
               </tr>

               <tr>
                   <td><b>C++, HTML, CSS</b></td>
                   <td>AfghanTech Technology Institute</td>
                   <td>2009</td>

               </tr>

               <tr>
                    <td>High School</td>
                    <td>Abo-Rehan-Alberoni</td>
                    <td>2008</td>

               </tr> 
        </table>
            </div>
            

            <div className="col-5">
            <h4>PREVIOUS EMPLOYMENT DETIALS:</h4>
        <table cellpadding="6%">
            <th>Workplace:</th>
                    <th>Job Title:</th>
                    <th>Date:</th>
                    <tr>
                    <td>DynCorp International Company</td>    
                        <td>Enroller Specialist and Dari Translator</td>
                        <td>28-Jan-10 to Sep-11</td>
                    </tr>
                    <tr>
                        <td>Simrishamns Kommun</td>
                        <td>IT Assistant</td>
                        <td>14-May-16 to Dec-2016</td>
                    </tr>
        </table>
            </div>
            </div>
        )
    }
}