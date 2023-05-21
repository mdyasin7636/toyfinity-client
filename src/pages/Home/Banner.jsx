import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url("https://i.ibb.co/J7TH2vj/banner1.jpg")`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-extrabold">Unleash Your Inner Hero</h1>
              <p className="mb-5 font-semibold">
              Enter a World of Epic Action Figures! Explore Where The Power of Transformers, Marvel, and DC Collide, Bringing Your Favorite Characters to Life. Immerse Yourself in a Universe of Extraordinary Collectibles and Ignite Your Imagination With Our Incredible Selection.
              </p>
              <Link to="/allToys">
              <button className="btn">See Now</button>
              </Link>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Banner;