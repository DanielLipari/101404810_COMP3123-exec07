import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {

  const [title, setTitle] = useState("Welcome to Fullstack Development - I");
  const [description, setDescription] = useState("React JS Programming Week09 Lab Exercise");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{title}</h1>
        <p>{description}</p>
        <MyInfo name="Daniel Lipari" studentId="101404810" />
      </header>
    </div>
  );
}

function MyInfo(props) {
  return (
    <div>
      <h2>My Information</h2>
      <p>Name: {props.name}</p>
      <p>Student ID: {props.studentId}</p>
      <p>George Brown College, Toronto</p>
    </div>
  );
}

export default App;
