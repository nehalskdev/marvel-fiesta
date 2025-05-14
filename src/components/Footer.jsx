import { useState, useEffect } from "react";

const Footer = () => {
  // 10 Famous MCU Quotes
  const marvelQuotes = [
    "With great power comes great responsibility. - Uncle Ben",
    "I can do this all day. - Captain America",
    "I am Iron Man. - Tony Stark",
    "Avengers... assemble! - Captain America",
    "That's my secret, Captain. I'm always angry. - Hulk",
    "I'm not looking for forgiveness, and I'm way past asking permission. - Black Widow",
    "Wakanda forever! - Black Panther",
    "I love you 3000. - Tony Stark",
    "Dread it, run from it, destiny arrives all the same. - Thanos",
    "What is grief, if not love persevering? - Vision",
  ];

  // Get a random quote only once when component mounts (on refresh)
  const [currentQuote] = useState(() => {
    const randomIndex = Math.floor(Math.random() * marvelQuotes.length);
    return marvelQuotes[randomIndex];
  });

  return (
    <footer className="marvel-footer">
      <div className="footer-quote">{currentQuote}</div>
      <div className="footer-copyright">
        © {new Date().getFullYear()} Marvel Fiesta | Refresh for new quote
      </div>
    </footer>
  );
};

export default Footer;
