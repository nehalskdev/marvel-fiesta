import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MovieList from "./components/MovieList";
// import Search from "./components/Search";
import Upcoming from "./components/Upcoming";
import About from "./components/About";
import Footer from "./components/Footer";
import TVSeries from "./components/Tvseries";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "movielist":
        return <MovieList />;
      case "tvseries":
        return <TVSeries />;
      case "upcoming":
        return <Upcoming />;
      case "about":
        return <About />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <Header />
      <Navbar setCurrentPage={setCurrentPage} />
      <main className="main-content">{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
