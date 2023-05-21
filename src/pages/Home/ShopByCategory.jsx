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
      alert("You must log in to view toy details");
    } 
    navigate(`/toy/${_id}`);
  };

  return (
    <div>
      <Tabs className="text-center">
        <TabList>
          <Tab>Transformers</Tab>
          <Tab>Marvel</Tab>
          <Tab>DC</Tab>
        </TabList>

        <TabPanel>
          {/* Transformers section */}
          <div className="grid grid-cols-2">
            {transformersToys.map(toy => (
              <div key={toy._id}>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <img className="w-36" src={toy.picture}/>
                  </figure>
                  <div className="card-body">
                    <p>Name: {toy.toy}</p>
                    <p>Price: ${toy.price}</p>
                    <p>Rating: {toy.rating}</p>
                    <div className="card-actions justify-center">
                      <button onClick={() => handleViewDetails(toy._id)} className="btn btn-primary">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          {/* Marvel section */}
          <div className="grid grid-cols-2">
            {marvelToys.map(toy => (
              <div key={toy._id}>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <img className="w-36" src={toy.picture} />
                  </figure>
                  <div className="card-body">
                    <p>Name: {toy.toy}</p>
                    <p>Price: ${toy.price}</p>
                    <p>Rating: {toy.rating}</p>
                    <div className="card-actions justify-center">
                      <button onClick={() => handleViewDetails(toy._id)} className="btn btn-primary">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          {/* DC section */}
          <div className="grid grid-cols-2">
            {dcToys.map(toy => (
              <div key={toy._id}>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <img className="w-36" src={toy.picture} />
                  </figure>
                  <div className="card-body">
                    <p>Name: {toy.toy}</p>
                    <p>Price: ${toy.price}</p>
                    <p>Rating: {toy.rating}</p>
                    <div className="card-actions justify-center">
                      <button onClick={() => handleViewDetails(toy._id)} className="btn btn-primary">View Details</button>
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

