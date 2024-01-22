export const exampleMovies = [
    {title: "Napoléon", id: 'abc', img: "napoleon-1.jpeg", still: "splash/napoleon-splash-1.jpeg"}, 
    {title: "Metropolis", id: 'bcd', img: "metropolis-1.jpg", still: "splash/metropolis-splash-1.jpg"}, 
    {title: "The Last Command", id: 'cde', img: 'last-command-1.jpeg', still: "splash/napoleon-splash-1.jpeg"},
    {title: "Charade", id: 'klm', img: 'charade-1.jpg', still: "splash/metropolis-splash-1.jpg"},
    {title: "The Big Parade", id: 'def', img: 'big-parade-1.jpg', still: "splash/napoleon-splash-1.jpeg"}, 
    {title: "The Crowd", id: 'efg', img: 'crowd-1.jpeg',still: "splash/metropolis-splash-1.jpg"},
    {title: "The Big Combo", id: 'hij', img: 'big-combo-1.jpg', still: "splash/napoleon-splash-1.jpeg"},
]

/* 
final form of 'movie' object:
{
    title: "My Movie",
    id: '1234abcd',
    info: {
        description: "description of the movie",
        director: "Joe Director",
        stars: ["Actor A", "Actor B"],
        release: "1933",
        isSilent: false,
        runTime: 120
    }
    posterImage: '/posters/1234abcd.jpg',
    splashImage: '/splash/1234abcd.jpg',
    isCollection: false,
    // if it's a collection, we have sub-group containing info about the individual parts...
    collection: []
}
*/
