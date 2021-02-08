import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const a=[54,4343,444,44,3,2,1]

  for(let j=0;j<a.length-1; j++){
    for(let i =0;i<a.length-1-j;i++){
      if(a[i]>a[i++]){
    let temp=a[i++]
    a[i++]=a[i]
    a[i]=temp
  }
}
}
  console.log(a)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
