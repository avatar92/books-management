import React, { Component } from 'react';
import './bookitem.css'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
class BookItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        var {item}=this.props
        return (
            <div> 
                <div className='bookitemContainer'>
                    <span className='bookinfo'>{item.isbn}</span>                            
                    <span className='bookinfo'>{item.name}</span>
                    <span className='bookinfo'>{item.price}$</span>
                    <div className='bookinfo'>
                        {item.availability==="true"?<div className='square' id='stock' style={{"backgroundColor":"green"}}>
                        
                        </div>:
                    <div className='square' id='stock' style={{"backgroundColor":"red"}}>
                        
                    </div>
                    }
                    </div>
                    <span className='bookinfo'>author : {item.author}</span>
                    <button className='btn btn-danger button bookinfo' onClick={()=>this.props.removeBook(item.id)}>Delete</button>
                    <Link to={`/book/${ item.id }`}><button className='btn btn-success button bookinfo'>Update</button></Link> 
                </div>
                <hr/>
            </div>
        );
    }
}
const mapDispatchToProps=dispatch=>{
    return{
    removeBook:(id)=>{
        dispatch({
            type:'REMOVE_BOOK',
            id     
        })
    }
}
}
export default connect(null,mapDispatchToProps)(BookItem);