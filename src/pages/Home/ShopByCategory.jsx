// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

// const ShopByCategory = () => {
//   return (
//     <div>
//       <Tabs className="text-center">
//         <TabList>
//           <Tab>Transformers</Tab>
//           <Tab>Marvel</Tab>
//           <Tab>DC</Tab>
//         </TabList>

//         <TabPanel>
//             {/* transformers section */}
          
//           <div className="grid grid-cols-2">
//             {/* toy 1 */}
//             <div>
//               <div className="card w-96 bg-base-100 shadow-xl">
//                 <figure>
//                   <img
//                     className="w-36"
//                     src="https://i.ibb.co/qDb7bmt/61404-Man-of-Steel-650h.jpg"
//                   />
//                 </figure>
//                 <div className="card-body">
//                   <p>Name: Superman</p>
//                   <p>Price: $50</p>
//                   <p>Rating: 5</p>
//                   <div className="card-actions justify-center">
//                     <button className="btn btn-primary">View Details</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </TabPanel>
//         <TabPanel>
//             {/* marvel section */}
//         <div className="grid grid-cols-2">
//             <div>
//               <div className="card w-96 bg-base-100 shadow-xl">
//                 <figure>
//                   <img
//                     className="w-36"
//                     src="https://i.ibb.co/qDb7bmt/61404-Man-of-Steel-650h.jpg"
//                   />
//                 </figure>
//                 <div className="card-body">
//                   <p>Name: Superman</p>
//                   <p>Price: $50</p>
//                   <p>Rating: 5</p>
//                   <div className="card-actions justify-center">
//                     <button className="btn btn-primary">View Details</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </TabPanel>
//         {/* dc section */}
//         <TabPanel>
//         <div className="grid grid-cols-2">
//             <div>
//               <div className="card w-96 bg-base-100 shadow-xl">
//                 <figure>
//                   <img
//                     className="w-36"
//                     src="https://i.ibb.co/qDb7bmt/61404-Man-of-Steel-650h.jpg"
//                   />
//                 </figure>
//                 <div className="card-body">
//                   <p>Name: Superman</p>
//                   <p>Price: $50</p>
//                   <p>Rating: 5</p>
//                   <div className="card-actions justify-center">
//                     <button className="btn btn-primary">View Details</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </TabPanel>
//       </Tabs>
//     </div>
//   );
// };

// export default ShopByCategory;



import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = ({ toys }) => {
  // Filter toys based on category
  const transformersToys = toys.filter(toy => toy.category === 'Transformers').slice(0, 2);
  const marvelToys = toys.filter(toy => toy.category === 'Marvel').slice(0, 2);
  const dcToys = toys.filter(toy => toy.category === 'DC').slice(0, 2);

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
                      <button className="btn btn-primary">View Details</button>
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
                      <button className="btn btn-primary">View Details</button>
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
                      <button className="btn btn-primary">View Details</button>
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

