import React from 'react';
import { mount} from 'enzyme';
import Header from './Header';


describe('Header Component with films details mode testing ', () => {

    let HeaderComponent;

    beforeEach( ()=> {
        const props = {
            activeFilm: {
                "id": 5924,
                "title": "Papillon",
                "tagline": "The greatest adventure of escape!",
                "vote_average": 7.8,
                "vote_count": 564,
                "release_date": "1973-12-13",
                "poster_path": "https://image.tmdb.org/t/p/w500/xY7k2M9eElJnLSYwqY85Xon5z6m.jpg",
                "overview": "A man befriends a fellow criminal as the two of them begin serving their sentence on a dreadful prison island, which inspires the man to plot his escape.",
                "budget": 12000000,
                "revenue": 53267000,
                "genres": ["Crime", "Drama"],
                "runtime": 151
            },
            searchFilmsHandler: jest.fn(),
            searchButtonHandler: jest.fn(),
        }
        HeaderComponent = mount(<Header {...props} />);
    });

    it("should render component with film description", () => {
        expect(HeaderComponent.find('h3').text()).toEqual("Papillon");
    });


    it("should lead back to the Search Films Component", () => {
        HeaderComponent.find('button#backToSearch').simulate('click');
        expect(HeaderComponent.find('Header')).toHaveLength(1);
    });

});


describe('Header Component with search mode testing ', () => {

    let HeaderComponent;

    beforeEach( ()=> {
        const props = {
            activeFilm: null,
            searchFilmsHandler: jest.fn(),
            searchButtonHandler: jest.fn(),
        }
        HeaderComponent = mount(<Header {...props} />);
    });

    it("should render component with input search", () => {
        expect(HeaderComponent.find('Search')).toHaveLength(1);
    });

    it('should respond to change event and change the state of the Header Component', () => {
        HeaderComponent.find('input#searchInput').simulate('change', {target: {value: 'cats'}});
        expect(HeaderComponent.state('term')).toEqual('cats');
    });

    it('should change search by tag state', () => {
        HeaderComponent.instance().toggleSearchBy({target:{value: 'genre'}});
        expect(HeaderComponent.state('searchBy')).toEqual('genre');
    });


});





