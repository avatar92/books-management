import React, { Component } from 'react';
import './bookpage.css'
import BookAdder from './bookAdder.js'
import BookItem from './bookItem.js'
import {connect} from 'react-redux'
class BooksPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentPage:1,
            dataDisplayedPerPage:2
        }
        this.totalPage = 1; 
    }
    addPageNumber = () => {
        if (this.state.currentPage < this.totalPage) {
            this.setState({
                currentPage: this.state.currentPage + 1
            })
        }
    }
    losePageNumber = () => {
        if (this.state.currentPage >= 2) {
            this.setState({
                currentPage: this.state.currentPage - 1
            })
        }
    }
    changePage = (x) => {
        this.setState({
            currentPage: x + 1,
        });
    }
    render() { 
        const { currentPage, dataDisplayedPerPage } = this.state;
        const indexOfLastData = currentPage * dataDisplayedPerPage;
        const indexOfFirstData = indexOfLastData - dataDisplayedPerPage;
        const currentDatas = this.props.bookReducer.slice(indexOfFirstData, indexOfLastData);
        const renderData = currentDatas.map(el => <div key={el.id}>
            <BookItem item={el}/>
        </div>)
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.bookReducer.length / dataDisplayedPerPage); i++) {
            pageNumbers.push(i);
        }
        this.totalPage = pageNumbers.length
        const renderPageNumbers = pageNumbers.map((number, index) => <div>
            {this.state.currentPage === index + 1 ? <span
                style={{ "background-color": "#17a2b8" }}
                className='PaginationNumber'
                key={index}
                onClick={() => this.changePage(index)}>
                {number}
            </span> :
                <span className='PaginationNumber'
                    key={index}
                    onClick={() => this.changePage(index)}>
                    {number}
                </span>
            }</div>
        );
        return (
             
            <div className='bookspageContainer'>
                <BookAdder/>
                <div className="PagesNumbers col-12">
                        <span onClick={() => this.losePageNumber()}>&laquo;</span>
                        {renderPageNumbers}
                        <span onClick={() => this.addPageNumber()}>&raquo;</span>
                </div>
                <hr/>
                {renderData}
            </div>
        );
    }
}
const mapStateToProps =(state)=>{
    return {
        bookReducer:state.bookReducer,
    }
} 
export default connect(mapStateToProps)(BooksPage);