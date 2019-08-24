import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import BooksPage from './bookspage/bookpage.js'
import BookUpdatePage from './bookupdate/bookupdatepage.js'
class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Route exact path='/' component={BooksPage}/>
                <Route exact path='/book/:id' render={(props)=><BookUpdatePage id={props.match.params.id}/>}/>
            </div>
        );
    }
}
 
export default Router;