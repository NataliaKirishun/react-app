import React from 'react';
import { render } from 'enzyme';
import Header from './Header';

describe('Header Component Snapshot', () => {
    it('Header Component should render correctly with given props', () => {
        const activeFilm={
            "id":5924,
            "title":"Papillon",
            "tagline":"The greatest adventure of escape!",
            "vote_average":7.8,
            "vote_count":564,
            "release_date":"1973-12-13",
            "poster_path":"https://image.tmdb.org/t/p/w500/xY7k2M9eElJnLSYwqY85Xon5z6m.jpg",
            "overview":"A man befriends a fellow criminal as the two of them begin serving their sentence on a dreadful prison island, which inspires the man to plot his escape.",
            "budget":12000000,
            "revenue":53267000,
            "genres":["Crime","Drama"],
            "runtime":151
        };
        const searchFilmsHandler=jest.fn();
        const searchButtonHandler = jest.fn();
        const component = render(<Header activeFilm={activeFilm} searchFilmsHandler={searchFilmsHandler} searchButtonHandler={searchButtonHandler} />);
        expect(component).toMatchSnapshot();
    });
});

