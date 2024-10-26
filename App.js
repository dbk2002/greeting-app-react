import React from 'react';
import './App.css';
import GreetingMessage from './GreetingMessage';

function App() {
  return (
    <div className="App">
      <h1>Hello, Dhanush B K! Welcome to React.</h1>
      {/* Bonus: Display personalized greeting using GreetingMessage component */}
      <GreetingMessage name="Dhanush" />
    </div>
  );
}

export default App;
