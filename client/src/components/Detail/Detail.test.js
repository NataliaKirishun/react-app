import React from 'react';
import { render } from 'enzyme';
import Detail from './Detail';

describe('Detail Snapshot', () => {
    it('Deatil Component should render correctly with given props', () => {
        const targetFilm={
            "id":423,
            "title":"The Pianist",
            "tagline":"Music was his passion. Survival was his masterpiece.",
            "vote_average":8.1,
            "vote_count":2571,
            "release_date":"2002-09-24",
            "poster_path":"https://image.tmdb.org/t/p/w500/iunmxWkOi7Vk17Ob3G2HwwjgHsr.jpg",
            "overview":"The true story of pianist Wladyslaw Szpilman's experiences in Warsaw during the Nazi occupation. When the Jews of the city find themselves forced into a ghetto, Szpilman finds work playing in a café; and when his family is deported in 1942, he stays behind, works for a while as a laborer, and eventually goes into hiding in the ruins of the war-torn city.",
            "budget":35000000,
            "revenue":120072577,
            "genres":["Drama","War"],
            "runtime":150
        };
        const searchButtonHandler=jest.fn();
        const component = render(<Detail targetFilm={targetFilm} searchButtonHandler={searchButtonHandler} />);
        expect(component).toMatchSnapshot();
    });
});

