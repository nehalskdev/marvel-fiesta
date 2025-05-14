import { useState, useEffect } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [phaseFilter, setPhaseFilter] = useState("all");
  const [sortBy, setSortBy] = useState("release");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://mcuapi.up.railway.app/api/v1/movies?page=1&limit=50&columns=title,release_date,cover_url,chronology,phase"
        );

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        const formattedMovies = data.data.map((movie) => ({
          id: movie.id,
          title: movie.title,
          year: new Date(movie.release_date).getFullYear(),
          poster:
            movie.cover_url ||
            "https://via.placeholder.com/300x450?text=No+Poster",
          chronology: movie.chronology,
          phase: movie.phase,
        }));

        setMovies(formattedMovies);
        setFilteredMovies(formattedMovies);
      } catch (err) {
        console.error("Error fetching movies:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    let results = [...movies];

    // Apply search filter
    if (searchTerm) {
      results = results.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply phase filter
    if (phaseFilter !== "all") {
      results = results.filter((movie) => movie.phase == phaseFilter);
    }

    // Apply sorting
    if (sortBy === "release") {
      results.sort((a, b) => a.year - b.year);
    } else if (sortBy === "chronology") {
      results.sort((a, b) => a.chronology - b.chronology);
    } else if (sortBy === "title") {
      results.sort((a, b) => a.title.localeCompare(b.title));
    }

    setFilteredMovies(results);
  }, [searchTerm, phaseFilter, sortBy, movies]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading Marvel Movies...</p>
      </div>
    );
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="movie-list">
      <h2>Marvel Cinematic Universe Movies</h2>

      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search Marvel movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <div className="filter-group">
          <h3>Filter by Phase:</h3>
          <div className="filter-options">
            <button
              className={`filter-button ${
                phaseFilter === "all" ? "active" : ""
              }`}
              onClick={() => setPhaseFilter("all")}
            >
              All Phases
            </button>
            {[1, 2, 3, 4, 5, 6].map((phase) => (
              <button
                key={phase}
                className={`filter-button ${
                  phaseFilter == phase ? "active" : ""
                }`}
                onClick={() => setPhaseFilter(phase)}
              >
                Phase {phase}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <h3>Sort by:</h3>
          <div className="filter-options">
            <button
              className={`filter-button ${
                sortBy === "release" ? "active" : ""
              }`}
              onClick={() => setSortBy("release")}
            >
              Release Date
            </button>
            <button
              className={`filter-button ${
                sortBy === "chronology" ? "active" : ""
              }`}
              onClick={() => setSortBy("chronology")}
            >
              Timeline Order
            </button>
            <button
              className={`filter-button ${sortBy === "title" ? "active" : ""}`}
              onClick={() => setSortBy("title")}
            >
              Title A-Z
            </button>
          </div>
        </div>
      </div>

      <div className="movies-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={movie.poster}
                alt={movie.title}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x450?text=No+Poster";
                }}
              />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>Release: {movie.year}</p>
                <p>Phase: {movie.phase}</p>
                <p className="chronology">Timeline: #{movie.chronology}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            No movies found matching your criteria
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;
