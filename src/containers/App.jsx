 import React, {Component}from 'react';
import CardList from './CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import '../styles/App.css'
import ErrorBoundary from '../components/ErrorBoundary'

class App extends Component {
  constructor() {
    super();
    // console.log('constructor')
    this.state = {
        robots: [],
        searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}));
    
    // console.log('componentDidMount');
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
    
  }

  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());

    })
    // console.log('render')
    if (this.state.robots.length === 0) {
      // console.log('length is 0')
      return <h1> Loading.... </h1>
      } else {
         // console.log('length is !0')
        return (
          <div className= 'tc pa2'>
            <h1 className= 'f1'>Robo Friends</h1>
            <SearchBox searchChange = {this.onSearchChange}/>
            <Scroll>
            <ErrorBoundary> 
            <CardList robots= {filteredRobots}/>
            </ErrorBoundary>
            </Scroll>
          </div>
      );  
    }
  
  }
  
}

export default App;
