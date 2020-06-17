import React from 'react';

async function App() {
  const value = 'World';
  let { text } = await( await fetch(`/api/message`)).json();
  return <div>{text}</div>;
}

export default App;
