
const Brand = () => {
    return (
        <div>
            <h2 className="text-center text-5xl font-bold mt-10">Powerhouse Partnerships</h2>
        <p className="text-center font-bold mt-6 mb-10">Top Toy Brands Join Forces with Us for Unmatched Fun</p>
            <div className="grid md:grid-cols-5 mb-20 ml-14">
            <div className="w-40">
            <img className="mask mask-hexagon-2" src="https://i.ibb.co/Y3DfJ9J/Hasbro.jpg" />
            </div>
            <div className="w-40">
            <img className="mask mask-hexagon-2" src="https://i.ibb.co/C2Lgzkh/Crayola.jpg" />
            </div>
            <div className="w-40">
            <img className="mask mask-hexagon-2" src="https://i.ibb.co/jRsRty7/greentoys.jpg" />
            </div>
            <div className="w-40">
            <img className="mask mask-hexagon-2" src="https://i.ibb.co/CQ4SqBj/neuro.png" />
            </div>
            <div className="w-40">
            <img className="mask mask-hexagon-2" src="https://i.ibb.co/SdJ4XRb/toystars.png" />
            </div>
        </div>
        </div>
    );
};

export default Brand;