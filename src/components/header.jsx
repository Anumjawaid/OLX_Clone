import { render } from '@testing-library/react'
import React from 'react'
import olx from '../ui/olx.png'
import './header.css'
import Imgdiv from '../ui/homeim.JPG'
import card1 from '../ui/card1.JPG'


class Header extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className='header fixed flex'>
                <div className="logo">
                    <img src={olx} width='70' height='30' />
                </div>
                {/* <div className="location">
                    <div className="icon-search"></div>
                    <input className='label' placeholder='Your Location'  />
                    <button className='icon-chevron-down' />
                </div>
                <div className="search flex aic">
                    <input type="text" placeholder="Find Cars Mobile and many more..." className='query' />
                    <button className='icon-search' />
                </div>
                <div className="actions"></div> */}
                <div className="locsearch">
                    {/* <span><i class="fas fa-search"></i></span> */}
                    <select name="Choose Location" id="">
                    
                        <option>Pakistan</option>
                        <option>City1</option>
                    </select>
                </div>
                <div className="itemsearch">
                    <select name="Choose Location" id="">
                        <option>Find Cars Mobile and many more...</option>
                        <option>City1</option>
                    </select>
                </div>
                <div className="alink">
                    <a href="">Login</a>
                </div>
                <div className="selbtn"><button className="sellbtn">Sell</button></div>
            </div>
        )
    }
}
class Homeimg extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="headersec flex">
                <img src={Imgdiv} width="100%"/>

            </div>
        )
    }
}
class Cards extends React.Component{
    render(){
        return(
            <div>
                <div className="cardd">
                    <br/>
                    <div className="imghead">
                        <div className="coltag"><p className='tag'>Featured</p></div>
                        <div className="colimg"><img src={card1} width='80px' height='70px'/></div>
                        <div className="colfav"><heart></heart></div>
                    </div>
                    <div className="pricehead"><div className="pp"><h3 className='price'>Rs,43,500</h3><p>Metal Detector Walk Through Gate</p></div><br></br></div>


                </div>
            </div>
        )
    }
}
class Contgrey extends React.Component{
    render(){
        return(
            <div className="container cd">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                
            </div>
        )
    }
}
class Cont extends React.Component{
    render(){
        return(
                <div className="container">
                <div className="row">
                        <h3>Fresh Recommendations</h3>
                        </div>
                        <br></br>
                    <div className="row">
                        <div className="container ct">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
               
                    </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="container ct">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
               
                    </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="container ct">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
               
                    </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="container ct">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
               
                    </div>
                    </div>
                    <br></br>
                    <Cards />
                    <div className="btnscent"><button className='loadbtn'>Load More</button></div>
                </div>

        )
    }
}
export  {Header,Homeimg,Cards,Contgrey,Cont};