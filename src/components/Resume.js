import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';


class Resume extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div>
                            <img 
                                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                            <h2  id="resume-name">Abdulfatai Suleiman</h2>
                            <h4 style={{color: 'grey', fontFamily: 'Oxygen'}}>Programmer</h4>
                            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                            <p style={{fontFamily: 'Oxygen'}}>Dynamic and detail-oriented Web Developer with a knack for conceptualizing
                                and delivering elegant, user-friendly solutions effectively and effciently.
                                Possesses a track record of developing a fully-functional website. 
                            </p>
                            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                            <h5 style={{fontFamily: 'Oxygen'}}>Address</h5>
                            <p style={{fontFamily: 'Oxygen'}}>Abuja, Nigeria</p>
                            <h5 style={{fontFamily: 'Oxygen'}}>Phone</h5>
                            <p style={{fontFamily: 'Oxygen'}}>+234 8161 846658</p>
                            <h5 style={{fontFamily: 'Oxygen'}}>Email</h5>
                            <p style={{fontFamily: 'Oxygen'}}>abdulfataisuleiman67@gmail.com</p>
                            <h5 style={{fontFamily: 'Oxygen'}}>Web</h5>
                            <p style={{fontFamily: 'Oxygen'}}>https://abdul-fatai.github.io/Portfolio</p>
                            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />

                        </div>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2 style={{fontFamily: 'Oxygen'}}>Education</h2>
                        <Education
                            startYear={2008} 
                            endYear={2013}
                            schoolName="FIRST LEAVING SCHOOL CERTIFICATE"
                            schoolDescription="L.E.A Primary School Saburi, Dei-Dei, Abuja"
                        />

                        <Education
                            startYear={2013} 
                            endYear={2018}
                            schoolName="SENIOR SECONDARY SCHOOL CERTIFICATE"
                            schoolDescription="Dependable International School, Dakwa, Niger state"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2 style={{fontFamily: 'Oxygen'}}>Experience</h2>
                        <Experience 
                            startYear = {2018}
                            endYear= {2019}
                            jobName = "SPACOJUICY COMPUTER INSTITUTE AND GRAPHIC PRINT"
                            jobDescription = "Computer Operator"
                        />

                        <Experience 
                            startYear = {2019}
                            endYear= "Till date"
                            jobName = "FREELANCE"
                            jobDescription = "Team work, Meet with client"
                        /> 

                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2 style={{fontFamily: 'Oxygen'}}>Skills</h2>
                        <Skills 
                            skill="HTML/CSS"
                            progress = {80}
                        />
                        <Skills 
                            skill="Laravel Php"
                            progress = {60}
                        />

                        {/* <Skills 
                            skill="ReactJS"
                            progress = {40}
                        /> */}
                        <Skills 
                            skill="SQL Database"
                            progress = {50}
                        />
                        <Skills 
                            skill="Bootstrap"
                            progress = {65}
                        />
                        <Skills 
                            skill="Git"
                            progress = {35}
                        />
                    </Cell>
                </Grid>        
            </div>
        )
    }
}

export default Resume;