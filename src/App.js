import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    persons: [
      {id: 'sfsdf', name:'Christian', age: 28},
      {id: 'gfhfgh', name:'Diana', age: 26},
      {id: 'ytruhgjhg', name:'Carl', age: 25}
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (personIndex) => {
    const personsArray = [...this.state.persons];
    personsArray.splice(personIndex, 1);
    this.setState({persons: personsArray})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  } 

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let personsHideAndShow = null;

    if(this.state.showPersons){
      personsHideAndShow = (
        <div>
          {this.state.persons.map((person, indexMan) => {
            return <Person
              click = {() => this.deletePersonHandler(indexMan)}
              name = {person.name}
              age = {person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <=1){
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>I do stupid and unusable things, but 'm pretty cool and super powerful!</p>
          <button 
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Person</button>
            {personsHideAndShow}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
