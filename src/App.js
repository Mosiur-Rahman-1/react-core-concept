import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const singer = {
    name: "Mosiur",
    age: 27,
    job: "Freelencer"
  }

  const playerName = ['Shakib al hasan', 'Rubel al kala', 'Nasir the playboy'];
  return (
    <div className="App">
      <header className="App-header">
        <p className= "color">I am {singer.name} {singer.job} person</p>
      </header>
      <Counter></Counter>
      <Person name = {playerName[0]}  age = "30"></Person>
      <Person name = {playerName[1]}  age = "20"></Person>
      <Person name = {playerName[2]}  age = "28"></Person>
    </div>
  );
}

function Counter () {

  const [count, setCount] = useState(10);

  return (

    <div>
      <h1>count: {count}</h1>
      <button onClick = {() => setCount(count+1)}>Increase</button>
      <button onClick = {() => setCount(count-1)}>DEcrease</button>
    </div>
  );
}

function Person(props) {


  return (
    <div className = "cricketer">
      <h1>Player Name and title: {props.name}</h1>
      <p>Bangladeshi cricket player</p>
  <p>Age: {props.age}</p>
    </div>
  );
}

export default App;
