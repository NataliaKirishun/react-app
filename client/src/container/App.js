import React, {Component, Fragment} from 'react'
import styled from 'styled-components'
import Search from '../components/Search/Search'
import Cockpit from '../components/Cockpit/Cockpit'
import EmptyResults from '../components/EmptyResults/EmptyResults'
import Films from '../components/Films/Films'
import Detail from '../components/Detail/Detail'
import Footer from '../components/Footer/Footer'
import mock from "../mock.json"


class App extends Component {

    constructor() {
        super();
        this.state = {
            term: '',
            searchBy: 'title',
            sortBy: 'release date',
            searched: false,
            allFilms: [],
            activeAlbumId: null

        };
        this.toggleSearchBy = this.toggleSearchBy.bind(this);
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.toggleSortBy = this.toggleSortBy.bind(this);
        this.searchFilms = this.searchFilms.bind(this);
        this.albumClickHandler = this.albumClickHandler.bind(this);
    }

    toggleSearchBy(e) {
        this.setState({
            searchBy: e.target.value
        });
    };

    inputChangeHandler(e) {
        this.setState({
            term: e.target.value
        })
    };

    formSubmitHandler(e) {
        e.preventDefault();
        this.searchFilms(this.state.searchBy, this.state.term.toLowerCase());
        this.setState({
            term: '',
            searched: true
        });

    };

    toggleSortBy(e) {
        let sortFunction = this.state.sortBy === 'release date' ?
            (a, b) => {
                return new Date(a['release_date']) - new Date(b['release_date']);
            } :
            (a, b) => {
                return a['vote_average'] - b['vote_average']
            };

        this.setState({
            sortBy: e.target.value,
            allFilms: this.state.allFilms.sort(sortFunction),
        })
    };

    searchFilms(searchBy, term) {
        let filterVariable = searchBy === 'title' ? 'title' : 'genres';
        let filteredFilms = mock.data.filter((item) => {
            if (typeof item[filterVariable] === 'string') {
                return item[filterVariable].toLowerCase().indexOf(term) > -1;
            }
            if (typeof item[filterVariable] === 'object') {
                return item[filterVariable].some((item) => {
                    return item.toLowerCase().indexOf(term) > -1
                })
            }
        });

        this.setState({
            allFilms: filteredFilms
        });
    }

    albumClickHandler(id) {
        this.setState({
            activeAlbumId:id
        })
    }

    render() {
        return (
            <AppWrapper>
                <Search
                    searchBy={this.state.searchBy}
                    inputChangeHandler={this.inputChangeHandler}
                    toggleSearchBy={this.toggleSearchBy}
                    formSubmitHandler={this.formSubmitHandler}/>
                <Main>
                    <Cockpit
                        sortBy={this.state.sortBy}
                        toggleSortBy={this.toggleSortBy}
                        filmsCount={this.state.allFilms.length}/>
                    {this.state.searched ?
                        this.state.allFilms.length ?
                            <Films
                                films={this.state.allFilms}
                                albumClickHandler={this.albumClickHandler}/> :
                            <EmptyResults/> :
                        null
                    }
                    <Detail/>
                </Main>
                <Footer/>
            </AppWrapper>
        )
    }
}

export default App;

const AppWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Main = styled.main`
    flex: 1 0 auto;
    
`;