import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:'Christian', age: 28},
      {name:'Diana', age: 26},
      {name:'Carl', age: 25}
    ]
  }

  switchNameHandler = () => {
    //console.log('Was clicked!');
    // DON'T DO THIS => this.state.persons[0] = 'Crille';
    this.setState({
      persons: [
        {name:'Crille', age: 28},
        {name:'Dianita', age: 26},
        {name:'Calle C', age: 25}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name:'Crille', age: 28},
        {name:event.target.value, age: 26},
        {name:'Calle C', age: 25}
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is actually really fucking cool!</p>
        <button 
          style={style}
          onClick={this.switchNameHandler}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler}>I'm a Web developer/Singer songwriter/Dog sitter</Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}>I'm a Project Buyer</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>I'm a Musician</Person>
      </div>
    );
  }
}

export default App;
