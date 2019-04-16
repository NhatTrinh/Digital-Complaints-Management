import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ComplaintsPage from './Components/ComplaintsPage';

class App extends Component {
  render() {
    return (
      <div>
      <NavBar/>
      <BrowserRouter>
      <div id='routes'>
      <Route exact path='/' component={Home}/>
      <Route exact path='/complaints' component={ComplaintsPage}/>
      </div>
      </BrowserRouter>
      <Footer/>
      </div>
    );
  }
}

export default App;
