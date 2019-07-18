import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Aboutme extends Component {
    render(){
        return(
            <div className="about-body">
                <Grid className="about-grid">
                    <Cell col={12}>
                       <img 
                       src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                       alt="avatar"
                       style={{height: '250px', margin: 'auto'}}
                       />
                       <div className="about-banner">
                       <h2>Abdulfatai Suleiman</h2>
                       <p>Dedicated web developer with two years of experience in database administration and website design. Strong creative and analytical skills. Team player with an eye for detail. HTML/CSS, Bootstrap, MySQL, Php and ReacJs. </p>
                
                       <div className="social-links-about">
                                
                        <a href="https://www.linkedin.com/in/abdulfatai-suleiman-706ba6172" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" arial-hidden="true" />
                        </a>
                        
                        
                        <a href="https://github.com/Abdul-fatai" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square" arial-hidden="true" />
                        </a>
                        
                        
                        <a href="http://www.twitter.com/Devstatic" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-twitter-square" arial-hidden="true" />
                        </a>

                        <a href="https://www.instagram.com/staticdev" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-instagram" arial-hidden="true" />
                        </a>
                        
                        </div>   
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Aboutme;