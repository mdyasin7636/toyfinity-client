import { useEffect, useState } from "react";
import ShopByCategory from "./ShopByCategory";

import Gallery from "./Gallery";
import CustomerReview from "./CustomerReview";
import Brand from "./Brand";
import Banner from "./Banner";
import useTitle from "../../hooks/useTitle";

const Home = () => {
  const [toys, setToys] = useState([]);
  useTitle('Home')

  useEffect(() => {
    fetch("https://toyfinity-server.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  return (
    <div>
      <Banner></Banner>
      <ShopByCategory toys={toys}></ShopByCategory>
      <Gallery></Gallery>
      <CustomerReview></CustomerReview>
      <Brand></Brand>
    </div>
  );
};

export default Home;
