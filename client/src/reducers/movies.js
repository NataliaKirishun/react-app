import { FETCH_MOVIES } from '../constants';

const initialState = {
    movies: [{
        "id":129,
        "title":"Spirited Away",
        "tagline":"",
        "vote_average":8.4,
        "vote_count":5095,
        "release_date":"2001-07-20",
        "poster_path":"https://image.tmdb.org/t/p/w500/dL11DBPcRhWWnJcFXl9A07MrqTI.jpg",
        "overview":"A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
        "budget":15000000,
        "revenue":274925095,
        "genres":["Animation","Family","Fantasy"],
        "runtime":125
    },{
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
    },
        {
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
        },{
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
        ],
};

const movies = (state=initialState, { type, movies }) => {
    switch (type) {
        case FETCH_MOVIES :
            return {
                ...state,
                movies
            };
        default:
            return state;
    }
};

export default movies;