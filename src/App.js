import React, {useState} from 'react';
import './Styles/App.css';
import { Routes, Route} from 'react-router-dom';
import { Home} from './components/Home'
import { About } from './components/About'
import { Project } from './components/Project'
import { Navbar } from './components/Navbar'


function App() {
  const [isActive, setIsActive] = useState(false)

  function toggleActive(){
      setIsActive(isActive ? false : true)
      console.log(isActive)
  }
  return (
    <div className="App">
          <div className="header-wrapper">
            <Navbar isActive={isActive} toggleActive={toggleActive}/>  
          </div>
      <Routes>
          <Route path="/" element={<Home isActive = {isActive} />} />
          <Route path="/about" element ={<About isActive = {isActive}/>} />
          <Route path="/project" element ={<Project isActive = {isActive}/>} />
      </Routes>
    </div>
  );
}

export default App;
