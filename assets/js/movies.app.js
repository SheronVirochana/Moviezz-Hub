
const moviesData = [
    
    {
        id: 5,
        title: "The Shadow's Edge (2025)",
        poster: "https://cinesubz.lk/wp-content/uploads/2025/11/e0RU6KpdnrqFxDKlI3NOqN8nHL6.jpg",
        rating: 7.5,
        quality: "WEBRIP",
        year: 2025,
        genre: ["Thriller", "Mystery"]
    },
    {
        id: 6,
        title: "The Jester 2 (2025)",
        poster: "https://cinesubz.lk/wp-content/uploads/2025/11/47dsw1jSOV0Be5zmy7CtLhYpqU.jpg",
        rating: 7.0,
        quality: "WEBRIP",
        year: 2025,
        genre: ["Horror", "Thriller"]
    },
    {
        id: 7,
        title: "The Family Plan 2 (2025)",
        poster: "https://cinesubz.lk/wp-content/uploads/2025/11/semFxuYx6HcrkZzslgAkBqfJvZk.jpg",
        rating: 5.6,
        quality: "WEBRIP",
        year: 2025,
        genre: ["Action", "Comedy", "Family"]
    },
    {
        id: 8,
        title: "The Elixir (2025)",
        poster: "https://cinesubz.lk/wp-content/uploads/2025/11/A6aJLPhtmin9ZTWC2h7dnrMHU4z.jpg",
        rating: 5.5,
        quality: "WEBRIP",
        year: 2025,
        genre: ["Fantasy", "Adventure"]
    },
    {
        id: 9,
        title: "Thalavara (2025)",
        poster: "https://cinesubz.lk/wp-content/uploads/2025/11/gXOf5RAKSiT1vqBIk43mK1j5DV9-scaled.webp",
        rating: 7.0,
        quality: "WEBDL",
        year: 2025,
        genre: ["Action", "Drama"]
    },
    {
        id: 10,
        title: "Suryapet Junction (2025)",
        poster: "https://cinesubz.lk/wp-content/uploads/2025/11/sjswv9mQvvETJdtRHKakEIPav8Y.jpg",
        rating: 5.5,
        quality: "WEBDL",
        year: 2025,
        genre: ["Drama", "Romance"]
    },
    {
        id: 11,
        title: "Steal My Heart (2025)",
        poster: "https://cinesubz.lk/wp-content/uploads/2025/11/8mYVIXA4S84mGISc3McjxYYeZj2.jpg",
        rating: 6.2,
        quality: "BLURAY",
        year: 2025,
        genre: ["Romance", "Comedy"]
    },
    {
        id: 12,
        title: "Soulcatcher (2023)",
        poster: "https://cinesubz.lk/wp-content/uploads/2025/11/l1f9JSPjCfNftigEii1SDK1g2b3.jpg",
        rating: 3.7,
        quality: "WEBRIP",
        year: 2023,
        genre: ["Action", "Thriller"]
    },
    {
        id: 13,
        title: "In Your Dreams (2025)",
        poster: "https://cinesubz.lk/wp-content/uploads/2025/11/ug0TqgmByPCEYzR9lQWQmyAa7sw.jpg",
        rating: 6.2,
        quality: "BLURAY",
        year: 2025,
        genre: ["Romance", "Comedy"]
    },
    {
        id: 14,
        title: "Cheif of War (2025)",
        poster: "https://cinesubz.lk/wp-content/uploads/2025/09/8Mckh3qJRTzXTQNZtpb133RHmO4.jpg",
        rating: 3.7,
        quality: "WEBRIP",
        year: 2025,
        genre: ["Action", "Thriller"]
    },
    {
        id: 1,
        title: "Telusu Kada (2025)",
        poster: "https://cinesubz.lk/wp-content/uploads/2025/11/Telusu-Kada-2025-.webp",
        rating: 5.4,
        quality: "WEBDL",
        year: 2025,
        genre: ["Romance", "Drama"]
    },
    {
        id: 2,
        title: "Vyasanasamethamu Jeevasamethamu (2025)",
        poster: "https://cinesubz.lk/wp-content/uploads/2025/11/iPy1ju7ipQCkZyFt8DTWCotcteu.jpg",
        rating: 7.0,
        quality: "WEBDL",
        year: 2025,
        genre: ["Comedy", "Drama"]
    },
    {
        id: 3,
        title: "Vala: Story of a Bandit (2025)",
        poster: "https://cinesubz.lk/wp-content/uploads/2025/11/m5KefviiDSpvlqlpomYR0kF3i3n.jpg",
        rating: 5.2,
        quality: "WEBDL",
        year: 2025,
        genre: ["Action", "Crime"]
    },
    {
        id: 4,
        title: "Tyler Perry's Finding Joy (2025)",
        poster: "https://cinesubz.lk/wp-content/uploads/2025/11/sUMdbrjHhMFDY327B31ctpF9MuY.jpg",
        rating: 4.5,
        quality: "WEBRIP",
        year: 2025,
        genre: ["Comedy", "Family"]
    },
    
];


const additionalMovies = [
    {
        id: 13,
        title: "Reflection in a Dead Diamond (2025)",
        poster: "https://cinesubz.lk/wp-content/uploads/2025/11/dVs09zkFNeFFZe1EYoZVoyp5SbY.jpg",
        rating: 6.8,
        quality: "WEBRIP",
        year: 2025,
        genre: ["Action", "Thriller"]
    },
    {
        id: 14,
        title: "One Battle After Another (2025)",
        poster: "https://cinesubz.lk/wp-content/uploads/2025/11/m1jFoahEbeQXtx4zArT2FKdbNIj.jpg",
        rating: 7.2,
        quality: "WEBDL",
        year: 2025,
        genre: ["Mystery", "Adventure"]
    },
    {
        id: 15,
        title: "No Other Choice (2025)",
        poster: "https://cinesubz.lk/wp-content/uploads/2025/11/8eGwqgR54xVwpeHSW0HhzXkftT.webp",
        rating: 5.9,
        quality: "BLURAY",
        year: 2025,
        genre: ["Science Fiction", "Drama"]
    },
    {
        id: 16,
        title: "Narik Sukmo (2025)",
        poster: "https://cinesubz.lk/wp-content/uploads/2025/11/ePnCjiv7vKUdIEijDS3ItD7wuCC.jpg",
        rating: 6.5,
        quality: "WEBRIP",
        year: 2025,
        genre: ["Fantasy", "Adventure"]
    },
    {
        id: 17,
        title: "Kiss of the Spider Woman (2025)",
        poster: "https://cinesubz.lk/wp-content/uploads/2025/11/c8zDeDq0Uatjly6Fh4ycmWuoLYy.jpg",
        rating: 7.8,
        quality: "WEBDL",
        year: 2023,
        genre: ["Drama", "Romance"]
    },
    {
        id: 18,
        title: "Good Fortune (2025)",
        poster: "https://cinesubz.lk/wp-content/uploads/2025/11/r83HIGA0mUiy7I9qVr17pF7SCDP.jpg",
        rating: 8.1,
        quality: "BLURAY",
        year: 2025,
        genre: ["Science Fiction", "Adventure"]
    }
];

const allMovies = [...moviesData, ...additionalMovies];


if (typeof module !== 'undefined' && module.exports) {
    module.exports = { moviesData, additionalMovies, allMovies };
}