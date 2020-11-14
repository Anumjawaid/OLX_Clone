import React from "react";
import {
  BrowserRouter as Router,Link,
  Route} from "react-router-dom";
import MainPage from '..//Render/mainpage'
import ItemPage from '..//Render/items'

class AppRouter extends React.Component{
    render(){
        return(
            
                <Router>
                    <Route exact path='/' component={MainPage} />
                    <Route path='/item' component={ItemPage} />

                </Router>
            
        )
    }
}
export default AppRouter;