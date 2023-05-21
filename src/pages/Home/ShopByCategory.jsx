import { useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";


const ShopByCategory = ({ toys }) => {

  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  

  // Filter toys based on category
  const transformersToys = toys.filter(toy => toy.category === 'Transformers').slice(0, 2);
  const marvelToys = toys.filter(toy => toy.category === 'Marvel').slice(0, 2);
  const dcToys = toys.filter(toy => toy.category === 'DC').slice(0, 2);


  const handleViewDetails = (_id) => {
    if (!user) {
      alert("You Must log in to View Toy Details");
    } 
    navigate(`/toy/${_id}`);
  };

  return (
    <div>
       <h2 className="text-4xl font-bold text-center mt-10 ">Shop By Category</h2>
       <p className="text-xl font-semibold text-center mt-4 mb-10">Explore The Superhero Universe</p>
      <Tabs className="text-center">
        <TabList className="font-bold">
          <Tab>Transformers</Tab>
          <Tab>Marvel</Tab>
          <Tab>DC</Tab>
        </TabList>

        <TabPanel>
          {/* Transformers section */}
          <div className="grid md:grid-cols-2">
            {transformersToys.map(toy => (
              <div key={toy._id}>
                <div className="card w-96 bg-base-200 shadow-xl mt-10 mx-auto">
                  <figure>
                    <img className="w-36 rounded-2xl mt-4" src={toy.picture}/>
                  </figure>
                  <div className="card-body">
                    <p className="font-bold">{toy.toy}</p>
                    <p className="font-bold">Price: <span className="font-semibold">${toy.price}</span></p>
                    <p className="font-bold">Rating: <span className="font-semibold">{toy.rating}</span></p>
                    <div className="card-actions justify-center">
                      <button onClick={() => handleViewDetails(toy._id)} className="btn">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          {/* Marvel section */}
          <div className="grid md:grid-cols-2">
            {marvelToys.map(toy => (
              <div key={toy._id}>
                <div className="card w-96 bg-base-200 shadow-xl mt-10 mx-auto">
                  <figure>
                    <img className="w-36 rounded-2xl mt-4" src={toy.picture} />
                  </figure>
                  <div className="card-body">
                    <p className="font-bold">{toy.toy}</p>
                    <p className="font-bold">Price: <span className="font-semibold">${toy.price}</span></p>
                    <p className="font-bold">Rating: <span className="font-semibold">{toy.rating}</span></p>
                    <div className="card-actions justify-center">
                      <button onClick={() => handleViewDetails(toy._id)} className="btn">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          {/* DC section */}
          <div className="grid md:grid-cols-2">
            {dcToys.map(toy => (
              <div key={toy._id}>
                <div className="card w-96 bg-base-200 shadow-xl mt-10 mx-auto">
                  <figure>
                    <img className="w-36 rounded-2xl mt-4" src={toy.picture} />
                  </figure>
                  <div className="card-body">
                    <p className="font-bold">{toy.toy}</p>
                    <p className="font-bold">Price: <span className="font-semibold">${toy.price}</span></p>
                    <p className="font-bold">Rating: <span className="font-semibold">{toy.rating}</span></p>
                    <div className="card-actions justify-center">
                      <button onClick={() => handleViewDetails(toy._id)} className="btn">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;

