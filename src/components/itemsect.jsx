import React from 'react'
import './itemsect.css'
import Item from '../ui/itemim.JPG'
import I from '../ui/card1.JPG'
import  {Cards} from '../components/header'
import Add from '../ui/add.JPG'
import Map from '../ui/map.JPG'


class ItemSect extends React.Component {
    render() {

        return (
            <div className='descim'>
                <div className="left">
                    <div className="one">
                        <div className="image">
                            <img alt="" src={I} width="50%" height='50%' />
                            </div>
                        <div className="detail">
                            <h6>Details</h6>
                            <p>Condition <span></span> New</p>
                            
                            </div>
                            <div className="description">
                            <h6>Description</h6>
                            <p>Beautiful High Gloss Designer bed set<br/>chester side tables
                            <br/>chester drawers
                            <br/>solid big sides
                            <br/>for Master bed room</p>
                            </div>
                    </div>
                    {/*  */}
                             <div className="seco">
                             <div className="row">
                        <h6>Related Adds</h6>
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

                             </div>

              
                </div>
                <div className="right">
                    <div className="pricetag"><div className="priceinner"><h6 className='price'>Rs,43,500</h6><p className='big'>Metal Detector Walk Through Gate</p><p>Dha Phase 8</p></div></div>
                    <div className="sellerdesc"><div className="sellerinner"><h5>Seller Description</h5>
                    <div className="imname"><h5>Name</h5><p>Member since</p></div>
                    <button className="btnseller">Chat With Seller</button>
                    <p>Show Number</p>
                    </div>
                    </div>
                    <div className="postedin"><div className="innerpost"><h5>Posted In</h5>
                    <p>Address</p><div className="immap"><img src={Map} alt='' /></div></div>
                   
                    </div>
                    <div className="advert">
                        <div className="addetail"></div>
                        <div className="imgad">
                        <img src={Add} alt='' />
                    </div>
                    </div>

                </div>
            </div>
        )
    }

}
class Tagimage extends React.Component {
    render() {
        return (
            <div className='container imasect'>
                <p>Home/Items</p>
                <img src={Item} width='100%' />
                <br/>
            </div>
        )
    }
}
export {
    Tagimage, ItemSect
}