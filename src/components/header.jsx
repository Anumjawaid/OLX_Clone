import { render } from '@testing-library/react'
import React from 'react'
import olx from '../ui/olx.png'
import './header.css'

class Header extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className='header fixed flex aic'>
                <div className="logo">
                    <img src={olx} width='70' height='30' />
                </div>
                <div className="location">
                    <div className="icon-search"></div>
                    <input className='label' placeholder='Your Location'  />
                    <button className='icon-chevron-down' />
                </div>
                <div className="search flex aic">
                    <input type="text" placeholder="Find Cars Mobile and many more..." className='query' />
                    <button className='icon-search' />
                </div>
                <div className="actions"></div>
            </div>
        )
    }
}
export default Header;