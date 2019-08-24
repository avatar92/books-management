import React, { Component } from 'react';
import './bookAdder.css'
import {connect} from 'react-redux'
class BookAdder extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isbn:'',
            name:'',
            price:0, 
            availability:"true",
            author:'',            
        }
    }
    handleClick=()=>{
        if (!this.state.isbn&&!this.state.name&&!this.state.author){
            alert('plz try to fill all the field')
        }
        else {
            this.props.addBook(this.state.isbn,this.state.name,this.state.price,this.state.availability,this.state.author)
            document.getElementById('ISBN').value=''
            document.getElementById('bookName').value=''
            document.getElementById('Price').value=''
            document.getElementById('author').value=''  
        }
    }
    handleChange=(event)=>{
        if (/^([0-9 -]{0,13})$/.test(event.target.value)===false)
            { event.target.value=event.target.value.slice(0, event.target.value.length-1)}
        this.setState({isbn:event.target.value})
    }

    render() { 
        console.log(this.state.isbn,this.state.name,this.state.price,this.state.availability,this.state.author)
        return ( 
            <div className='bookspageAdder'>
                <div className='container-fluid'>
                    <div className='row'>  
                        <div className='col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 dataInput'>  
                            <input type="text" required className="form-control" placeholder="ISBN" aria-label="ISBN" aria-describedby="basic-addon1" id='ISBN' onChange={this.handleChange}/>
                        </div>
                        <div className='col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 dataInput'>
                            <input type="text" required className="form-control" placeholder="Book Name" aria-label="Book Name" aria-describedby="basic-addon1" id='bookName' onChange={e=>this.setState({name:e.target.value})}/>
                        </div>
                        <div className='col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 dataInput'>
                            <input type="number" required className="form-control" placeholder="Price $$" aria-label="Price $$" aria-describedby="basic-addon1" id='Price' onChange={e=>this.setState({price:e.target.value})}/>
                        </div>
                        <div className='col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 dataInput'>
                            <input type="text" required className="form-control" placeholder="AUTHOR" aria-label="AUTHOR" aria-describedby="basic-addon1" id='author' onChange={e=>this.setState({author:e.target.value})}/>
                        </div>
                        <div className='col-12 col-sm-6 offset-sm-3 col-md-3 offset-md-0 col-lg-3 col-xl-3 dataInput'>
                            <label >available</label>
                            <select required className="custom-select"  id="inlineFormCustomSelect" onChange={e=>this.setState({availability:e.target.value})}>
                                <option defaultValue>true</option>
                                <option>false</option>
                            </select>
                        </div>
                        <div className='col-12 adderButton'>
                            <button className='btn btn-info' onClick={this.handleClick}>Add book</button>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
const mapDispatchToProps=dispatch=>{
        return{
        addBook:(isbn,name,price,availability,author)=>{
            dispatch({
                type:'ADD_BOOK',
                value:{
                    id:Math.random(),
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
export default connect(null,mapDispatchToProps)(BookAdder);