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
                            <p style={{fontFamily: 'Oxygen'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                            <h5 style={{fontFamily: 'Oxygen'}}>Address</h5>
                            <p style={{fontFamily: 'Oxygen'}}>1 Hacker Way  Menlo Park, 90840</p>
                            <h5 style={{fontFamily: 'Oxygen'}}>Phone</h5>
                            <p style={{fontFamily: 'Oxygen'}}>+234 8161 846658</p>
                            <h5 style={{fontFamily: 'Oxygen'}}>Email</h5>
                            <p style={{fontFamily: 'Oxygen'}}>someone@exmple.com</p>
                            <h5 style={{fontFamily: 'Oxygen'}}>Web</h5>
                            <p style={{fontFamily: 'Oxygen'}}>staticdev.com</p>
                            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />

                        </div>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2 style={{fontFamily: 'Oxygen'}}>Education</h2>
                        <Education
                            startYear={2002} 
                            endYear={2012}
                            schoolName="My university"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                        />

                        <Education
                            startYear={2012} 
                            endYear={2019}
                            schoolName="My second university"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2 style={{fontFamily: 'Oxygen'}}>Experience</h2>
                        <Experience 
                            startYear = {2012}
                            endYear= {2019}
                            jobName = "First Job"
                            jobDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                        />

                        <Experience 
                            startYear = {2012}
                            endYear= {2019}
                            jobName = "Second Job"
                            jobDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                        /> 

                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2 style={{fontFamily: 'Oxygen'}}>Skills</h2>
                        <Skills 
                            skill="HTML/CSS"
                            progress = {50}
                        />
                        <Skills 
                            skill="Php"
                            progress = {70}
                        />

                        <Skills 
                            skill="ReactJS"
                            progress = {40}
                        />

                        <Skills 
                            skill="Bootstrap"
                            progress = {65}
                        />
                    </Cell>
                </Grid>        
            </div>
        )
    }
}

export default Resume;