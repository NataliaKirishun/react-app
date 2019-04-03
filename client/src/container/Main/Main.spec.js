import React from 'react';
import {mount} from 'enzyme';
import Main from './Main';

describe('Main Component testing', () => {

    let MainComponent;

    beforeEach( ()=> {
          const props = {
                    searched: true,
                    filteredFilms: [
                    {
                        "id": 269149,
                        "title": "Zootopia",
                        "tagline": "Welcome to the urban jungle.",
                        "vote_average": 7.7,
                        "vote_count": 6795,
                        "release_date": "2016-02-11",
                        "poster_path": "https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg",
                        "overview": "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
                        "budget": 150000000,
                        "revenue": 1023784195,
                        "genres": ["Animation", "Adventure", "Family", "Comedy"],
                        "runtime": 108
                    }, {
                    "id": 22,
                    "title": "Pirates of the Caribbean: The Curse of the Black Pearl",
                    "tagline": "Prepare to be blown out of the water.",
                    "vote_average": 7.5,
                    "vote_count": 8914,
                    "release_date": "2003-07-09",
                    "poster_path": "https://image.tmdb.org/t/p/w500/tkt9xR1kNX5R9rCebASKck44si2.jpg",
                    "overview": "Jack Sparrow, a freewheeling 17th-century pirate, quarrels with a rival pirate bent on pillaging Port Royal. When the governor's daughter is kidnapped, Sparrow decides to help the girl's love save her.",
                    "budget": 140000000,
                    "revenue": 655011224,
                    "genres": ["Adventure", "Fantasy", "Action"],
                    "runtime": 143
                }],
                    albumClickHandler : jest.fn(),
            };

          MainComponent = mount(<Main {...props} />);
    })

    it("should render 2pcs Film ", () => {
        expect(MainComponent.find('Film')).toHaveLength(2);
    });

    it("should render 2pcs Film ", () => {
        MainComponent.instance().toggleSortBy({target:{value: 'rating'}});
        expect(MainComponent.state('sortBy')).toEqual('rating');
    });

});

