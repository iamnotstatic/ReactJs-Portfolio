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
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square"  arial-hidden="true" />
                                    (234) 8903-3030
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '30px',  fontFamily: 'Anton'}}>
                                    <i className="fa fa-fax" arial-hidden="true" />
                                    (234) 8903-3030
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton' }}>
                                    <i className="fa fa-envelope" arial-hidden="true" />
                                    someone@gmail.com
                                </ListItemContent>
                            </ListItem>
                        
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton' }}>
                                    <i className="fa fa-skype" arial-hidden="true" />
                                    mySkypeID
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
