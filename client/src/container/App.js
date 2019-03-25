import React, { Component, Fragment } from 'react'
import Search from '../components/Search/Search'
import Cockpit from '../components/Cockpit/Cockpit'
import mock from "../mock.json"


class App extends Component {

    constructor(){
        super();
        this.state={
            term:'',
            searchBy: 'title',
            sortBy: 'rating'

        };
        this.toggleSearchBy = this.toggleSearchBy.bind(this);
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.toggleSortBy = this.toggleSortBy.bind(this);
        this.searchFilms = this.searchFilms.bind(this);
    }

    toggleSearchBy(e) {
        console.log('toggleSearchBy');
        this.setState({
            searchBy: e.target.value
        });
    };

    inputChangeHandler(e) {
        console.log('inputChangeHandler');
        this.setState({
            term: e.target.value
        })
    };

    formSubmitHandler(e) {
        console.log('formSubmitHandler');
        e.preventDefault();
        this.searchFilms(this.state.searchBy, this.state.term);
        this.setState({
            term:''
        })
    };

    toggleSortBy(e){
        console.log('toggleSortBy');
        this.setState({
            sortBy: e.target.value
        })
    };

    searchFilms(searchBy, term){
        let filterVariable = searchBy === 'title' ? 'title' : 'genres';
        mock.data.filter( (item)=>{
            console.log(item[filterVariable]);

        } )
    }

    render(){
        return (
            <Fragment>
                <Search
                    searchBy={this.state.searchBy}
                    inputChangeHandler={this.inputChangeHandler}
                    toggleSearchBy={this.toggleSearchBy}
                    formSubmitHandler={this.formSubmitHandler}/>
                <Cockpit
                    sortBy={this.state.sortBy}
                    toggleSortBy={this.toggleSortBy}/>
            </Fragment>
        )
    }
}

export default App;