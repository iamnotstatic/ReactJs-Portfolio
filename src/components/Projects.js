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
                
                <Card shadow={5} className="card-rap">
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.valuecoders.com/blog/wp-content/uploads/2018/05/laravel.jpg) center / cover'}}>Nerdsweb</CardTitle>
                    <CardText>
                    nerdsweb is a platform where software developers write articles, take part in discussions, and build their professional profiles. 
                    </CardText>
                    <CardActions border>
                     <Button colored>
                         <a href="https://github.com/Abdul-fatai/Nerdsweb" rel="noopener noreferrer" target="_blank" style={{textDecoration: 'none', color: '#3f51b5'}}>GitHub</a>
                     </Button>
                     {/* <Button colored>Code Pen</Button>
                     <Button colored>Live Demo</Button> */}
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} className="card-rap">
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i0.wp.com/wp.laravel-news.com/wp-content/uploads/2017/07/php-leader.png?resize=2200%2C1125) center / cover'}}>Bloggershive</CardTitle>
                    <CardText>
                        Bloggershive is web application where you can write articles also you can go there to read articles
                    </CardText>
                    <CardActions border>
                    <Button colored>
                         <a href="https://github.com/Abdul-fatai/Bloggershive" rel="noopener noreferrer" target="_blank" style={{textDecoration: 'none', color: '#3f51b5'}}>GitHub</a>
                     </Button>
                     {/* <Button colored>Code Pen</Button>
                     <Button colored>Live Demo</Button> */}
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} className="card-rap">
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.valuecoders.com/blog/wp-content/uploads/2018/05/laravel.jpg) center / cover'}}>Admin Dashboard</CardTitle>
                    <CardText>
                         A web Application built with Laravel with all Admin functionality eg. Delete User, Give role etc.
                    </CardText>
                    <CardActions border>
                    <Button colored>
                         <a href="https://github.com/Abdul-fatai/Admin-dashboard" rel="noopener noreferrer" target="_blank" style={{textDecoration: 'none', color: '#3f51b5'}}>GitHub</a>
                     </Button>
                     {/* <Button colored>Code Pen</Button>
                     <Button colored>Live Demo</Button> */}
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} className="card-rap">
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i0.wp.com/wp.laravel-news.com/wp-content/uploads/2017/07/php-leader.png?resize=2200%2C1125) center / cover'}}>Showcase</CardTitle>
                    <CardText>
                        A web application where you can Showcase your product or bussiness.
                    </CardText>
                    <CardActions border>
                    <Button colored>
                         <a href="https://github.com/Abdul-fatai/Showcase" rel="noopener noreferrer" target="_blank" style={{textDecoration: 'none', color: '#3f51b5'}}>GitHub</a>
                     </Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} className="card-rap">
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.valuecoders.com/blog/wp-content/uploads/2018/05/laravel.jpg) center / cover'}}>Item-Manager-REST-API</CardTitle>
                    <CardText>
                       Item Manager restful Api's 
                    </CardText>
                    <CardActions border>
                    <Button colored>
                         <a href="https://github.com/Abdul-fatai/-Item-Manager-REST-API" rel="noopener noreferrer" target="_blank" style={{textDecoration: 'none', color: '#3f51b5'}}>GitHub</a>
                     </Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} className="card-rap">
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.valuecoders.com/blog/wp-content/uploads/2018/05/laravel.jpg) center / cover'}}>Contact Store</CardTitle>
                    <CardText>
                       Web application where you can store contacts 
                    </CardText>
                    <CardActions border>
                    <Button colored>
                         <a href="https://github.com/Abdul-fatai/Contact-Store" rel="noopener noreferrer" target="_blank" style={{textDecoration: 'none', color: '#3f51b5'}}>GitHub</a>
                     </Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        } 
    }
    
    render() {
        return (
           <div className="category-tabs">
               <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                   <Tab>PHP/LARAVEL</Tab>
                   {/* <Tab>Php</Tab>
                   <Tab>Ajax</Tab> */}
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
