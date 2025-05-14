import { useState } from "react";

const Upcoming = () => {
  const [activeTrailer, setActiveTrailer] = useState(0);

  const upcomingMovies = [
    {
      id: 1,
      title: "Deadpool & Wolverine",
      releaseDate: "July 26, 2024",
      bio: "The merc with a mouth teams up with Wolverine in a multiversal adventure that will change the MCU forever. Expect brutal action, fourth-wall breaks, and cameos galore.",
      trailerId: "tu6PvZ8qT4g",
      thumbnail: "https://i.ytimg.com/vi/tu6PvZ8qT4g/maxresdefault.jpg",
    },
    {
      id: 2,
      title: "Captain America: Brave New World",
      releaseDate: "February 14, 2025",
      bio: "Sam Wilson fully embraces his role as Captain America, facing political intrigue and a new super-soldier threat in a post-Blip world.",
      trailerId: "5j7ZOhxm6-w",
      thumbnail: "https://i.ytimg.com/vi/5j7ZOhxm6-w/maxresdefault.jpg",
    },
    {
      id: 3,
      title: "Thunderbolts",
      releaseDate: "May 2, 2025",
      bio: "A team of antiheroes and reformed villains are assembled for dangerous missions. Starring Bucky, Yelena, Ghost, and more.",
      trailerId: "a2J2q31BmUQ",
      thumbnail: "https://i.ytimg.com/vi/a2J2q31BmUQ/maxresdefault.jpg",
    },
  ];

  return (
    <div className="upcoming-page">
      <h2>Upcoming MCU Movies</h2>

      {/* Main Trailer Player */}
      <div className="main-trailer">
        <iframe
          width="100%"
          height="450"
          src={`https://www.youtube.com/embed/${upcomingMovies[activeTrailer].trailerId}?autoplay=1&mute=1`}
          title="YouTube trailer player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Trailer Thumbnail Grid */}
      <div className="trailer-thumbnails">
        {upcomingMovies.map((movie, index) => (
          <div
            key={movie.id}
            className={`thumbnail-card ${
              index === activeTrailer ? "active" : ""
            }`}
            onClick={() => setActiveTrailer(index)}
          >
            <img src={movie.thumbnail} alt={movie.title} />
            <div className="thumbnail-overlay">
              <span>{movie.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Movie Info Grid */}
      <div className="upcoming-movies-grid">
        {upcomingMovies.map((movie) => (
          <div key={movie.id} className="upcoming-movie-card">
            <h3>{movie.title}</h3>
            <p className="release-date">{movie.releaseDate}</p>
            <p className="movie-bio">{movie.bio}</p>
            <button
              className="watch-trailer-btn"
              onClick={() => {
                const movieIndex = upcomingMovies.findIndex(
                  (m) => m.id === movie.id
                );
                setActiveTrailer(movieIndex);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Watch Trailer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
