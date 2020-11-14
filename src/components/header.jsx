import { render } from '@testing-library/react'
import React from 'react'
import olx from '../ui/olx.png'
import './header.css'
import Imgdiv from '../ui/homeim.JPG'
import card1 from '../ui/card1.JPG'
import Headim from '../ui/appim.JPG'
import {Link } from "react-router-dom";

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
class Footimg extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="headersec flex">
                <img src={Headim} width="100%"/>

            </div>
        )
    }
}
class Cards extends React.Component{
    render(){
        return(
            <div>
                <Link to="/item" > 
                <div className="cardd">
                    <br/>
                    <div className="imghead">
                        <div className="coltag"><p className='tag'>Featured</p></div>
                        <div className="colimg"><img src={card1} width='80px' height='70px'/></div>
                        <div className="colfav"><heart></heart></div>
                    </div>
                    <div className="pricehead"><div className="pp"><h3 className='price'>Rs,43,500</h3><p>Metal Detector Walk Through Gate</p></div><br></br></div>


                </div>
                </Link>
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
                <div className="container cont">
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
class Footer1 extends React.Component{
    render(){
        return(
            <div className='footer1'>
                <div className="c1">
                    <h6>Popular Categories</h6>
                    <ul>
                        <li>cars</li>
                        <li>Flats for rents</li>
                        <li>Jobs</li>
                        <li>mobile Phones</li>
                    </ul>
                </div>
                <div className="c2">
                <h6>Popular Categories</h6>
                    <ul>
                        <li>cars</li>
                        <li>Flats for rents</li>
                        <li>Jobs</li>
                        <li>mobile Phones</li>
                    </ul>
                </div>
                <div className="c3"> <h6>Popular Categories</h6>
                    <ul>
                        <li>cars</li>
                        <li>Flats for rents</li>
                        <li>Jobs</li>
                        <li>mobile Phones</li>
                    </ul></div>
                <div className="c5"> <h6>Popular Categories</h6>
                    <ul>
                        <li>cars</li>
                        <li>Flats for rents</li>
                        <li>Jobs</li>
                        <li>mobile Phones</li>
                    </ul></div>


            </div>

        )
    }
}
class Footer2 extends React.Component{
    render(){
        return(
            <div className="footer2">
                <div className="oc"><p>Other countries India-South Africa-Indonesia</p></div>
                <div className="clas"><h6>Free Classifieds In Pakistan @ 2006-2007</h6></div>
            </div>
        )
    }
} 
export  {Header,Homeimg,Cards,Contgrey,Cont,Footimg,Footer1,Footer2};