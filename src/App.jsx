import React from 'react';
import UserList from './UserList';
import Counter from './Counter';

function App() {
  const users = ['Alice', 'Bob', 'Charlie'];
  const isLoggedIn = true;

  return (
    <div>
      <h1>Lab Activity 3</h1>
      {/* Conditional Rendering */}
      {isLoggedIn ? <p>Welcome back, User!</p> : <p>Please log in.</p>}

      <UserList users={users} />
      <Counter />
    </div>
  );
}

export default App;