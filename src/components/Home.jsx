import { FaDiscord, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <img
          src="https://w0.peakpx.com/wallpaper/318/17/HD-wallpaper-marvel-heroes.jpg"
          alt="Marvel Characters"
        />
      </div>

      <div className="about-section">
        <h2>Why Marvel and Sci-Fi Movies Are So Entertaining!</h2>
        <p>
          Marvel and sci-fi movies transport us to extraordinary worlds beyond
          our imagination. They combine cutting-edge visual effects with
          compelling storytelling, creating immersive experiences that appeal to
          our sense of wonder. These films explore universal themes of heroism,
          sacrifice, and the battle between good and evil, while showcasing
          technological possibilities that push the boundaries of what we
          believe is achievable. The Marvel Cinematic Universe, in particular,
          has mastered the art of interconnected storytelling, creating a vast
          narrative tapestry that keeps fans engaged across multiple films and
          characters. - Nehal Shaikh
        </p>
      </div>

      {/* Blog Section */}
      <div className="blog-section">
        <h2 className="blog-heading">Super Blogs</h2>
        <p className="blog-subheading">
          Thoughts on movies, tech, and pop culture
        </p>
        <div className="blog-container">
          {/* Blog Post 1 */}
          <div className="blog-post">
            <div className="blog-image-container">
              <img
                src="https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Superhero Evolution"
                className="blog-image"
              />
            </div>
            <h3>The Evolution of Superhero Movies</h3>
            <p>
              Exploring how superhero films have changed from their early days
              to the massive cinematic universes we see today. The journey from
              practical effects to complete CGI worlds and how storytelling has
              evolved with audience expectations.
            </p>
          </div>

          {/* Blog Post 2 */}
          <div className="blog-post">
            <div className="blog-image-container">
              <img
                src="https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Superhero Evolution"
                className="blog-image"
              />
            </div>
            <h3>Why Sci-Fi Predicts the Future</h3>
            <p>
              Many technologies we use today were first imagined in science
              fiction. From communicators (smartphones) to video calling, sci-fi
              authors and filmmakers have often been decades ahead of real-world
              innovation.
            </p>
          </div>

          <div className="blog-post">
            <div className="blog-image-container">
              <img
                src="https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Superhero Evolution"
                className="blog-image"
              />
            </div>
            <h3>Why Sci-Fi Predicts the Future</h3>
            <p>
              Many technologies we use today were first imagined in science
              fiction. From communicators (smartphones) to video calling, sci-fi
              authors and filmmakers have often been decades ahead of real-world
              innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Author Profile */}
      <div className="author-profile">
        <div className="profile-image-container">
          <img
            src="https://scontent.fbom36-1.fna.fbcdn.net/v/t39.30808-6/482022682_2908596269302061_7786136347816673538_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=AxEzzOqb2SgQ7kNvwEeLaaj&_nc_oc=Adk1ItxoXpLi8-Y6wp5yPmHZdxqma8D9Q6jzouCHytMiHYGh0XhQaP9hycf9wLqzU9o&_nc_zt=23&_nc_ht=scontent.fbom36-1.fna&_nc_gid=PV0GBL3IkH00_lWu8CubuQ&oh=00_AfIwD7LOaWl5hDMAcWnnLDiFsE0drcVtJbT_t-nROBdrzQ&oe=682B9C13" // Replace with your image path
            alt="Nehal Shaikh"
            className="profile-image"
          />
        </div>
        <h3 className="author-bio">Nehal Shaikh</h3>
        <p className="author-bio">Movie Enthusiast & Tech Blogger</p>

        <div className="social-links">
          <a
            href="https://discord.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord className="social-icon" />
          </a>
          <a
            href="https://instagram.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
