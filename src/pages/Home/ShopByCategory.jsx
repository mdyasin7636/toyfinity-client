import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  return (
    <div>
      <Tabs className="text-center">
        <TabList>
          <Tab>Transformers</Tab>
          <Tab>Marvel</Tab>
          <Tab>DC</Tab>
        </TabList>

        <TabPanel>
            {/* transformers section */}
          {/* toy 1 */}
          <div className="grid grid-cols-2">
            <div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="w-36"
                    src="https://i.ibb.co/qDb7bmt/61404-Man-of-Steel-650h.jpg"
                  />
                </figure>
                <div className="card-body">
                  <p>Name: Superman</p>
                  <p>Price: $50</p>
                  <p>Rating: 5</p>
                  <div className="card-actions justify-center">
                    <button className="btn btn-primary">View Details</button>
                  </div>
                </div>
              </div>
            </div>
            {/* toy 2 */}
            <div>
            <div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="w-36"
                    src="https://i.ibb.co/qDb7bmt/61404-Man-of-Steel-650h.jpg"
                  />
                </figure>
                <div className="card-body">
                  <p>Name: Superman</p>
                  <p>Price: $50</p>
                  <p>Rating: 5</p>
                  <div className="card-actions justify-center">
                    <button className="btn btn-primary">View Details</button>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
            {/* marvel section */}
        <div className="grid grid-cols-2">
            <div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="w-36"
                    src="https://i.ibb.co/qDb7bmt/61404-Man-of-Steel-650h.jpg"
                  />
                </figure>
                <div className="card-body">
                  <p>Name: Superman</p>
                  <p>Price: $50</p>
                  <p>Rating: 5</p>
                  <div className="card-actions justify-center">
                    <button className="btn btn-primary">View Details</button>
                  </div>
                </div>
              </div>
            </div>
            {/* toy 2 */}
            <div>
            <div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="w-36"
                    src="https://i.ibb.co/qDb7bmt/61404-Man-of-Steel-650h.jpg"
                  />
                </figure>
                <div className="card-body">
                  <p>Name: Superman</p>
                  <p>Price: $50</p>
                  <p>Rating: 5</p>
                  <div className="card-actions justify-center">
                    <button className="btn btn-primary">View Details</button>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </TabPanel>
        {/* dc section */}
        <TabPanel>
        <div className="grid grid-cols-2">
            <div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="w-36"
                    src="https://i.ibb.co/qDb7bmt/61404-Man-of-Steel-650h.jpg"
                  />
                </figure>
                <div className="card-body">
                  <p>Name: Superman</p>
                  <p>Price: $50</p>
                  <p>Rating: 5</p>
                  <div className="card-actions justify-center">
                    <button className="btn btn-primary">View Details</button>
                  </div>
                </div>
              </div>
            </div>
            {/* toy 2 */}
            <div>
            <div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="w-36"
                    src="https://i.ibb.co/qDb7bmt/61404-Man-of-Steel-650h.jpg"
                  />
                </figure>
                <div className="card-body">
                  <p>Name: Superman</p>
                  <p>Price: $50</p>
                  <p>Rating: 5</p>
                  <div className="card-actions justify-center">
                    <button className="btn btn-primary">View Details</button>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
