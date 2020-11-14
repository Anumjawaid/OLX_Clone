import React from 'react'
import './itemsect.css'
import Item from '../ui/itemim.JPG'
import I from '../ui/card1.JPG'
import  {Header,Homeimg,Contgrey,Cont,Cards,Footimg,Footer1,Footer2} from '../components/header'


class ItemSect extends React.Component {
    render() {

        return (
            <div className='descim'>
                <div className="left">
                    <div className="1"><div className="image"><img src={I} width="70%" height='50%' />
                        <div className="detail">
                            <h3>Details</h3>
                            <p>Condition </p>
                            <p>New</p>
                            <div className="description">
                            <h3>Description</h3>
                            <p>Beautiful High Gloss Designer bed set<br/>chester side tables
                            <br/>chester drawers
                            <br/>solid big sides
                            <br/>for Master bed room</p>

                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="2">
                        <div className="container">
                        <div className="row">
                        <h3>Related Adds</h3>
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
                </div>
                <div className="right">

                </div>
            </div>
        )
    }

}
class Tagimage extends React.Component {
    render() {
        return (
            <div className='container'>
                <p>Home/Items</p>
                <img src={Item} width='100%' />
            </div>
        )
    }
}
export {
    Tagimage, ItemSect
}