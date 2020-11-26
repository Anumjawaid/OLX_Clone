import React from 'react'
import olx from '../ui/olx.png'
import './itemsect.css'
import 'bootstrap/dist/css/bootstrap.min.css';



class Post extends React.Component{
    render(){
        return(
            <div>
                <nav class="navbar navbar-light bg-light">
  <span class="navbar-brand mb-0 h1"><img  width='70' height='30' alt='' src={olx}/></span>
</nav>



            </div>
        )
    }
}
class ContPost extends React.Component{
    render(){
        return(
            <div>
                <div className="container">
                    <div className="postmain">
                        <div className="headcat"><h3>Post Your Ad</h3></div>
                        <div className="posts">
                            <h4 className='headcategory'>Choose A Category
                            </h4>
                            <ul>
                            <li>Mobiles</li>
                            <li>Vehicles</li>
                            <li>Property For Sale</li>
                            <li>Property For Rent</li>
                            <li>Electronics And Home Appliances</li>
                            <li>Bikes</li>
                            </ul></div>
                    </div>
                </div>
            </div>
        )
    }
}
export {Post,ContPost}
