import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Aboutme extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="about-grid">
                    <Cell col={12}>
                       <img 
                       src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                       alt="avatar"
                       style={{height: '250px', margin: 'auto'}}
                       />
                       <div className="about-banner">
                       <h2>Abdulfatai Suleiman</h2>
                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                       <div className="social-links">
                                
                        <a href="http://www.google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" arial-hidden="true" />
                        </a>
                        
                        
                        <a href="http://www.google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square" arial-hidden="true" />
                        </a>
                        
                        
                        <a href="http://www.google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-twitter-square" arial-hidden="true" />
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