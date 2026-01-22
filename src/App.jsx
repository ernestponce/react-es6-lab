import React from 'react';
import './App.css';

function App() {
  const names = ['Alice', 'Bob', 'Charlie'];
  const doubled = names.map(name => name.length * 2);
  console.log('Doubled lengths:', doubled);

  const person = { name: 'Alice', age: 25 };
  const { name, age } = person;
  console.log('Destructured:', name, age);

  return (
    <div className="App">
      <h1>Lab Activity 3: ES6 and React</h1>
      <p>Check the console (Right Click > Inspect > Console) to see ES6 outputs.</p>
    </div>
  );
}

export default App;