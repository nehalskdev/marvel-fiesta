import { useState, useEffect } from "react";

const Header = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  // Marvel logo animation trigger
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 10000); // Animate every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="marvel-header">
      <div className="logo-container">
        <svg
          className={`marvel-logo ${isAnimating ? "animate" : ""}`}
          viewBox="0 0 500 200"
        >
          <path
            className="logo-path"
            d="M0,100 Q125,200 250,100 T500,100"
            fill="none"
            stroke="#ED1D24"
            strokeWidth="10"
          />
          <text x="250" y="120" textAnchor="middle" className="logo-text">
            MARVEL FIESTA
          </text>
        </svg>
      </div>
    </header>
  );
};

export default Header;
