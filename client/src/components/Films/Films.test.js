import React from 'react';
import { render } from 'enzyme';
import Films from './Films';

describe('Films Snapshot', () => {
    it('Films Component should render correctly with given props', () => {
        const  films=[
            {
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
            },{
                "id":11031,
                "title":"This Is Spinal Tap",
                "tagline":"Does for rock & roll what 'The Sound of Music' did for hills.",
                "vote_average":7.7,
                "vote_count":517,
                "release_date":"1984-05-04",
                "poster_path":"https://image.tmdb.org/t/p/w500/2VDPeoPJ2bKdmfuJxxCktx1hr5g.jpg",
                "overview":"\"This Is Spinal Tap\" shines a light on the self-contained universe of a metal band struggling to get back on the charts, including everything from its complicated history of ups and downs, gold albums, name changes and undersold concert dates, along with the full host of requisite groupies, promoters, hangers-on and historians, sessions, release events and those special behind-the-scenes moments that keep it all real.",
                "budget":2500000,
                "revenue":4736202,
                "genres":["Comedy","Music"],
                "runtime":82
            }
        ];
        const albumClickHandler=jest.fn();
        const component = render(<Films films={films} albumClickHandler={albumClickHandler} />);
        expect(component).toMatchSnapshot();
    });
});

