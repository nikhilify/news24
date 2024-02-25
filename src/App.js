import './App.css';

import React,{Component} from 'react';
import { Navbar } from './components/Navbar';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import News from './components/News'
import LoadingBar from 'react-top-loading-bar';

class App extends Component {
  state = {
    progress: 0
  }

  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
  render(){
  return (
    <>


      <BrowserRouter>

        <Navbar/>

        <LoadingBar
        height={5}
        color='#f11946'
        progress={this.state.progress}
      />

        <div className='container my-3' >

          <Routes>
            <Route exact path="/" element={<News setProgress = {this.setProgress} key='general' pageSize={12} country='in' category='General' />} />
            <Route exact path="/business" element={<News setProgress = {this.setProgress} key='business' pageSize={12} country='in' category='Business' />} />
            <Route exact path="/entertainment" element={<News setProgress = {this.setProgress} key='entertainment' pageSize={12} country='in' category='Entertainment' />} />
            <Route exact path="/general" element={<News setProgress = {this.setProgress} key='general' pageSize={12} country='in' category='General' />} />
            <Route exact path="/health" element={<News setProgress = {this.setProgress} key='health' pageSize={12} country='in' category='Health' />} />
            <Route exact path="/science" element={<News setProgress = {this.setProgress} key='science' pageSize={12} country='in' category='Science' />} />
            <Route exact path="/sports" element={<News setProgress = {this.setProgress} key='sports' pageSize={12} country='in' category='Sports' />} />
            <Route exact path="/technology" element={<News setProgress = {this.setProgress} key='technology' pageSize={12} country='in' category='Technology' />} />




          </Routes>
        </div>

      </BrowserRouter>

    </>
  );
}
}
export default App;
