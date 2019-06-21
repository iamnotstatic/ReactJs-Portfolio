import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {

    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories(){
        if (this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}> React #1</CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    </CardText>
                    <CardActions border>
                     <Button colored>GitHub</Button>
                     <Button colored>GitHub</Button>
                     <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}> React #1</CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    </CardText>
                    <CardActions border>
                     <Button colored>GitHub</Button>
                     <Button colored>GitHub</Button>
                     <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}> React #1</CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    </CardText>
                    <CardActions border>
                     <Button colored>GitHub</Button>
                     <Button colored>GitHub</Button>
                     <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        } else if (this.state.activeTab === 1){
            return(
                <div>
                    <h1>Another Hello world</h1>
                </div>
            )
        } else if (this.state.activeTab === 2){
            return(
                <div>
                    <h1>Again</h1>
                </div>
            )
        }
    }
    
    render() {
        return (
           <div className="category-tabs">
               <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                   <Tab>React</Tab>
                   <Tab>Php</Tab>
                   <Tab>Ajax</Tab>
               </Tabs>
                
                   <Grid>
                       <Cell col={12}>
                       <div className="content">{this.toggleCategories()}</div>
                       </Cell>
                   </Grid>
                

           </div>
        )
    }
}

export default Projects
