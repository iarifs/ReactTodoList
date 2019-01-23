/*Importing react files and 
our main css 
also TodoList class form Todolist.js
*/

import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList'

/*creating App class with es6 and extends from component
and render Todolist and exporting as a App component*/
class App extends Component {
  render() {
    return (
       <TodoList />
    );
  }
}

export default App;
