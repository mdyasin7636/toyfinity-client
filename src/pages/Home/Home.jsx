// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

import { useEffect, useState } from "react";
import ShopByCategory from "./ShopByCategory";
import { Link } from "react-router-dom";
import Gallery from "./Gallery";



const Home = () => {

  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://toyfinity-server.vercel.app/alltoys")
    .then(res => res.json())
    .then(data => {
      setToys(data);
    })
  }, [])

  return (
    <div>
      {/* Banner Section */}

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
              <button className="btn btn-primary">See Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Shop By Category Section */}

      <div>
        <h2 className="text-5xl font-extrabold text-center">Shop By Category</h2>
        <ShopByCategory
        toys={toys}
        ></ShopByCategory>
      </div>

      {/* Gallery Section */}

      <div>
        <h2 className="text-center text-3xl font-bold p-10"> gallery</h2>
        <Gallery></Gallery>
      </div>

      {/* Extra Section 1 */}

      <div>
        <h2 className="text-center text-3xl font-bold p-10">
          Extra Section 1 Coming Soon...
        </h2>
      </div>

      {/* Extra Section 2 */}

      <div>
        <h2 className="text-center text-3xl font-bold p-10">
          Extra Section 2 Coming Soon...
        </h2>
      </div>
    </div>
  );
};

export default Home;
