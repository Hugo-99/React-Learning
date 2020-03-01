import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css'
import {Greet} from './components/Greet.js'
import Welcome from './components/Welcome'
import Hello from  './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <ParentComponent />
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Bruce Lee" midde="A">
        <p>
          This is another props.
        </p>
      </Greet> */}
      {/* <Greet name="Hugo Koh" midde="B">
        <button>Action</button>
      </Greet>
      <Greet name="Nancy Koh" midde="C"/> */}
      {/* <Hello /> */}
      {/* <Welcome name="Hugo Koh" midde="B"/> */}
    </div>
  );
}

export default App;
