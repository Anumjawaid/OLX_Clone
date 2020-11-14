import React from 'react'
import './App.css';
import  {Header,Homeimg,Contgrey,Cont} from './components/header'
import Home from './components/home'

function App() {
  return (
    <div className="App">
   <Header/>
   <br></br>
   <br></br>
   <br></br>
<Home />
<br></br>
<Homeimg />
<Contgrey />
<Cont />


    </div>
  );
}

export default App;
