import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import { Route } from 'react-router-dom';
import AboutMe from './components/NavBar/AboutMe/AboutMe';
import Blog from './components/NavBar/Blog/Blog';
import OnlineBlock from './components/NavBar/OnlineBlock/OnlineBlock';

const App = (props) => {


  return (
    <div className="body">
      <NavBar />
      <Route component={AboutMe} path="/aboutme"></Route>
      <Route component={Body} path="/main"></Route>
      <Route path="/blog" render={() => <Blog blogData={props.blogData} />} />
      <Route component={OnlineBlock} path="/online"></Route>
      <Footer />
    </div>
  );
}

export default App;
