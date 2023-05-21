/* eslint-disable react/no-unescaped-entities */
const CustomerReview = () => {
    return (
      <div>
        <h2 className="text-center text-5xl font-bold mt-10">Our Customers Loves Us</h2>
        <p className="text-center text-xl font-bold mt-4 mb-20">Your Satisfaction is Our Priority</p>
        <div className="grid md:grid-cols-3 gap-5 mx-10">
        <div className="flex flex-col items-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://i.ibb.co/4sCHmNR/cutomer-1.jpg" />
            </div>
          </div>
          <p className="mt-8 font-semibold">"Fantastic selection of Transformers, Marvel, and DC action heroes. The website is user-friendly, and the products arrived in excellent condition. Highly recommend for all superhero fans!"</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://i.ibb.co/wgTmDDx/cutomer-2.jpg" />
            </div>
          </div>
          <p className="mt-8 font-semibold">"Best toy website for superhero enthusiasts! The quality of the action figures is exceptional, and the customer service is top-notch. A must-visit for collectors and fans alike!"</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://i.ibb.co/wRzHjrF/cutomer-3.jpg" />
            </div>
          </div>
          <p className="mt-8 font-semibold">"Amazing toy website for Transformers, Marvel, and DC fans. The range of products is impressive, and the website is easy to navigate. The toys are of great quality, and the customer service is excellent."</p>
        </div>
      </div>
      </div>
    );
  };
  
  export default CustomerReview;
  