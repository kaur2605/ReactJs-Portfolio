import React from 'react';
import './App.css';
import Main from './components/Main';
import { Link } from 'react-router-dom'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header title={<Link style={{ textDecoration: 'none', color: 'white' }} to='/'>My Portfolio</Link>} className="header" scroll>
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/project">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="Portfolio" className="draw" >
          <Navigation className="draw">
            <Link to="/home">Home</Link>
            <Link to="/project">Projects</Link>
            <Link to="/about">Resume</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>

  );
}

export default App;
