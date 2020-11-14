import React from 'react'
import '../App.css'
import  {Header,Footer1,Footer2} from '../components/header'
import {
    Tagimage,ItemSect
} from '../components/itemsect'
import Home from '../components/home'

function ItemPage() {
  return (
    <div className="App">
   <Header/>
   <br></br>
   <br></br>
   <br></br>
<Home />
<Tagimage />
<ItemSect />
<Footer1 />
<Footer2 />

    </div>
  );
}

export default ItemPage;