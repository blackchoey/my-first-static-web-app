import React from 'react';

async function App() {
  let { text } = await( await fetch(`/api/message`)).json();
  return <div>{text}</div>;
}

export default App;
