import React, { Component } from 'react'
import './App.css';
import Main from './components/Main';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import { Link } from 'react-router-dom';


export class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout>
    <Header className="header-color" title={<Link style={{textDecoration: 'none', color: '#fff'}} to="/">MyPortfolio</Link>} scroll>
              <Navigation>
                  <Link to="/resume">Resume</Link>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title={<Link style={{textDecoration: 'none', color:'#333'}} to="/">MyPortfolio</Link>}>
              <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
  </div>
    )
  }
}

export default App

