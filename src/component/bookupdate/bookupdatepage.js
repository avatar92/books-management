import React, { Component } from 'react';
import './bookupdatepage.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
class BookUpadatePage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isbn:'',
            name:'',
            price:0,
            availability:'true',
            author:''
        }
        this.book = this.props.bookReducer.filter(el=>el.id===Number(this.props.id))
    }
    handleClick=()=>{
        this.props.updateBook(Number(this.props.id),this.state.isbn===''?this.book[0].isbn:this.state.isbn,this.state.name===''?this.book[0].name:this.state.name,!this.state.price?this.book[0].price:this.state.price,this.state.availability===''?this.book[0].availability:this.state.availability,this.state.author===''?this.book[0].author:this.state.author)
        document.getElementById('ISBN').value=''
        document.getElementById('bookName').value=''
        document.getElementById('Price').value=''
        document.getElementById('author').value=''  
    }
    handleChange=(event)=>{
        if (/^([0-9 -]{0,13})$/.test(event.target.value)===false)
            { event.target.value=event.target.value.slice(0, event.target.value.length-1)}
        this.setState({isbn:event.target.value})
    }
    render() {
        // console.log(this.props)
        console.log(this.book)
        console.log(this.state.isbn,this.state.name,this.state.price,this.state.availability,this.state.author)
        return ( 
            <div className='bookupdateContainer'>
                <div className='container-fluid'>
                    <div className='row'>  
                        <div className='col-12 inputcontainer'>  
                            <input type="text" required defaultValue={this.book[0].isbn} className="form-control bookdescriptioninput" placeholder="ISBN" aria-label="ISBN" aria-describedby="basic-addon1" id='ISBN' onChange={this.handleChange}/>
                        </div>
                        <div className='col-12 inputcontainer'>
                            <input type="text" required defaultValue={this.book[0].name} className="form-control bookdescriptioninput" placeholder="Book Name" aria-label="Book Name" aria-describedby="basic-addon1" id='bookName' onChange={e=>this.setState({name:e.target.value})}/>
                        </div>
                        <div className='col-12 inputcontainer'>
                            <input type="number" required defaultValue={this.book[0].price} className="form-control bookdescriptioninput" placeholder="Price $$" aria-label="Price $$" aria-describedby="basic-addon1" id='Price' onChange={e=>this.setState({price:e.target.value})}/>
                        </div>
                        <div className='col-12 inputcontainer'>
                            <input type="text" required defaultValue={this.book[0].author} className="form-control bookdescriptioninput" placeholder="AUTHOR" aria-label="AUTHOR" aria-describedby="basic-addon1" id='author' onChange={e=>this.setState({author:e.target.value})}/>
                        </div>
                        <div className='col-12'>
                            <p >available</p>
                            <select required className="custom-select bookdescriptioninput"  id="inlineFormCustomSelect" onChange={e=>this.setState({availability:e.target.value})}>
                                <option defaultValue>true</option>
                                <option>false</option>
                            </select>
                        </div>
                        <div className='col-12 adderButton'>
                            <Link to='/'><button className='btn btn-info' onClick={this.handleClick}>update book</button></Link>
                        </div>
                    </div>
                </div>  
            </div>
        );
    }
}
const mapDispatchToProps=dispatch=>{
    return{
    updateBook:(id,isbn,name,price,availability,author)=>{
        dispatch({
            type:'MODIF_BOOK',
            value:{
                id,
                isbn,
                name,
                price,
                availability,
                author,
            }     
        })
    }
}
}
const mapStateToProps=(state)=>{
    return {
        bookReducer:state.bookReducer,
    }
} 
export default connect(mapStateToProps,mapDispatchToProps)(BookUpadatePage);