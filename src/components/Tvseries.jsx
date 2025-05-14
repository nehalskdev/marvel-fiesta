import { useState, useEffect } from "react";

const TVSeries = () => {
  const [series, setSeries] = useState([]);
  const [filteredSeries, setFilteredSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("release");

  // Fetch TV series with retry logic
  const fetchTVSeries = async (retryCount = 0) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        "https://mcuapi.up.railway.app/api/v1/tvshows?page=1&limit=50"
      );

      console.log("API Response Status:", response.status);

      if (!response.ok) {
        // If server error, try again (max 3 times)
        if (response.status >= 500 && retryCount < 3) {
          console.log(`Retrying... Attempt ${retryCount + 1}`);
          await new Promise((resolve) =>
            setTimeout(resolve, 1000 * (retryCount + 1))
          );
          return fetchTVSeries(retryCount + 1);
        }
        throw new Error(`Server responded with status ${response.status}`);
      }

      const data = await response.json();
      console.log("API Data Received:", data);

      if (!data.data || !Array.isArray(data.data)) {
        throw new Error("Invalid data format from API");
      }

      const formattedSeries = data.data.map((show) => ({
        id: show.id,
        title: show.title || "Untitled Series",
        year: show.release_date
          ? new Date(show.release_date).getFullYear()
          : "N/A",
        poster:
          show.cover_url ||
          "https://via.placeholder.com/300x450?text=No+Poster",
        seasons: show.season_count || 1,
        overview: show.overview || "No description available",
      }));

      setSeries(formattedSeries);
      setFilteredSeries(formattedSeries);
    } catch (err) {
      console.error("Fetch Error:", err);
      setError(err.message);

      // Fallback data if API fails completely
      if (retryCount >= 2) {
        console.log("Using fallback data");
        const fallbackData = [
          {
            id: 1,
            title: "WandaVision",
            year: 2021,
            poster:
              "https://m.media-amazon.com/images/M/MV5BY2Y1ZDVhOGYtYzBmMi00M2NmLWJjNTItZDhjMGVjN2JkYzE0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
            seasons: 1,
            overview:
              "Wanda Maximoff and Vision live an idyllic suburban life, but their reality is not what it seems.",
          },
          // Add more fallback series as needed
        ];
        setSeries(fallbackData);
        setFilteredSeries(fallbackData);
        setError(null);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTVSeries();
  }, []);

  // Filter and sort series
  useEffect(() => {
    let results = [...series];

    // Apply search filter
    if (searchTerm) {
      results = results.filter(
        (show) =>
          show.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (show.overview &&
            show.overview.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Apply sorting
    results.sort((a, b) => {
      if (sortBy === "release") {
        return a.year - b.year;
      } else if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      } else if (sortBy === "seasons") {
        return b.seasons - a.seasons;
      }
      return 0;
    });

    setFilteredSeries(results);
  }, [searchTerm, sortBy, series]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading Marvel TV series...</p>
      </div>
    );
  }

  return (
    <div className="tv-series-page">
      <h2>Marvel Cinematic Universe TV Series</h2>

      {error && (
        <div className="api-warning">
          <p>⚠️ Couldn't connect to the live API. Showing cached data.</p>
          <small>Error: {error}</small>
        </div>
      )}

      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search Marvel TV series..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

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
              className={`filter-button ${sortBy === "title" ? "active" : ""}`}
              onClick={() => setSortBy("title")}
            >
              Title A-Z
            </button>
            <button
              className={`filter-button ${
                sortBy === "seasons" ? "active" : ""
              }`}
              onClick={() => setSortBy("seasons")}
            >
              Seasons
            </button>
          </div>
        </div>
      </div>

      <div className="series-grid">
        {filteredSeries.length > 0 ? (
          filteredSeries.map((show) => (
            <div key={show.id} className="series-card">
              <img
                src={show.poster}
                alt={show.title}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x450?text=No+Poster";
                }}
              />
              <div className="series-info">
                <h3>{show.title}</h3>
                <p className="meta">
                  <span>Released: {show.year}</span>
                  <span>
                    {show.seasons} Season{show.seasons !== 1 ? "s" : ""}
                  </span>
                </p>
                <p className="overview">{show.overview}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No TV series found matching your criteria</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSortBy("release");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TVSeries;
