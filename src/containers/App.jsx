 import React, {Component, useState, useEffect} from 'react';
import CardList from './CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import '../styles/App.css'
import ErrorBoundary from '../components/ErrorBoundary'

function App() {
  const [robots,setRobots] = useState([])
  const [searchfield,setSearchfield] = useState('')

  useEffect(() =>  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setRobots(users) );
    
    // console.log('componentDidMount');
  },[]);

  const onSearchChange = (event) => {
    setSearchfield( event.target.value)
     }

 
    const filteredRobots = robots.filter(robots => {
      return robots.name.toLowerCase().includes(searchfield.toLowerCase());

    })
    // console.log('render')
    if (robots.length === 0) {
      // console.log('length is 0')
      return <h1> Loading.... </h1>
      } else {
         // console.log('length is !0')
        return (
          <div className= 'tc pa2'>
            <h1 className= 'f1'>Robo Friends</h1>
            <SearchBox searchChange = {onSearchChange}/>
            <Scroll>
            <ErrorBoundary> 
            <CardList robots= {filteredRobots}/>
            </ErrorBoundary>
            </Scroll>
          </div>
      );  
    }
  
  }

export default App;
