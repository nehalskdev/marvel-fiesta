const Navbar = ({ setCurrentPage }) => {
  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => setCurrentPage("home")}>Home</li>
        <li onClick={() => setCurrentPage("movielist")}>Movies</li>
        <li onClick={() => setCurrentPage("tvseries")}>TV Series</li>
        <li onClick={() => setCurrentPage("upcoming")}>Upcoming</li>
        <li onClick={() => setCurrentPage("about")}>About</li>
      </ul>
    </nav>
  );
};

export default Navbar;
