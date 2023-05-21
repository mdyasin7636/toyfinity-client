// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

import { useEffect, useState } from "react";
import ShopByCategory from "./ShopByCategory";



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
            backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}

      <div>
        <h2 className="text-center text-3xl font-bold p-10">
          Gallery Section Coming Soon...
        </h2>
      </div>

      {/* Shop By Category Section */}

      <div>
        <h2 className="text-5xl font-extrabold text-center">Shop By Category</h2>
        <ShopByCategory
        toys={toys}
        ></ShopByCategory>
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
