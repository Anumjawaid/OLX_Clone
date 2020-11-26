import React from "react";
import {
  BrowserRouter as Router,
  Route} from "react-router-dom";
import MainPage from '..//Render/mainpage'
import ItemPage from '..//Render/items'
import PostPage from '..//Render/posts'

class AppRouter extends React.Component{
    render(){
        return(
            
                <Router>
                    <Route exact path='/' component={MainPage} />
                    <Route path='/item' component={ItemPage} />
                    <Route path='/posts' component={PostPage} />

                </Router>
            
        )
    }
}
export default AppRouter;