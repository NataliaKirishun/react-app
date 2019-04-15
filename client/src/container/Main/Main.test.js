import React from 'react';
import { shallow , render } from 'enzyme';
import Main from './Main';

describe('Main Component Snapshot', () => {
    it('Main Component should render warning that no films were found when there are no such films', () => {
        const searched = true;
        const filteredFilms = [];
        const albumClickHandler= jest.fn();
        const component = shallow(<Main searched={searched} filteredFilms={filteredFilms} albumClickHandler={albumClickHandler} />);
        expect(component).toMatchSnapshot();
    });
    it('Main Component should render movies layout when there are several films found by the request', () => {
        const searched = true;
        const filteredFilms = [{
            "id":1891,
            "title":"The Empire Strikes Back",
            "tagline":"The Adventure Continues...",
            "vote_average":8.3,
            "vote_count":7414,
            "release_date":"1980-05-20",
            "poster_path":"https://image.tmdb.org/t/p/w500/6u1fYtxG5eqjhtCPDx04pJphQRW.jpg",
            "overview":"The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda. But Darth Vader is more determined than ever to capture Luke. Meanwhile, rebel leader Princess Leia, cocky Han Solo, Chewbacca, and droids C-3PO and R2-D2 are thrown into various stages of capture, betrayal and despair.",
            "budget":18000000,
            "revenue":538400000,
            "genres":["Adventure","Action","Science Fiction"],
            "runtime":124
        }];
        const albumClickHandler= jest.fn();
        const component = render(<Main searched={searched} filteredFilms={filteredFilms} albumClickHandler={albumClickHandler} />);
        expect(component).toMatchSnapshot();
    });

});

