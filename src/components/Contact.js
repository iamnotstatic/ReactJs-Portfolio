import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Abdulfatai Suleiman</h2>
                        <img 
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Dynamic and detail-oriented Web Developer with a knack for conceptualizing
                                and delivering elegant, user-friendly solutions effectively and effciently.
                                Possesses a track record of developing a fully-functional website.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square"  arial-hidden="true" />
                                   +2348161846658
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '20px',  fontFamily: 'Anton'}}>
                                    <i className="fa fa-fax" arial-hidden="true" />
                                    +2348161846658
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton' }}>
                                    <i className="fa fa-envelope" arial-hidden="true" />
                                    abdulfataisuleiman67@gmail.com
                                </ListItemContent>
                            </ListItem>
                            
                        </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact
