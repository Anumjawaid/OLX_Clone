import React from 'react'
import '../App.css'
import  {Header,Homeimg,Contgrey,Cont,Footimg,Footer1,Footer2} from '../components/header'
import Home from '../components/home'

function MainPage() {
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
<br/>
<Footimg />
<Footer1 />
<Footer2 />

    </div>
  );
}

export default MainPage;