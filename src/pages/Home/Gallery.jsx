
const Gallery = () => {
    return (
      <div>
        <h2 className="text-center text-4xl font-bold mt-10">Gallery</h2>
        <p className="text-center font-bold text-xl mb-10 mt-4">Epic Heroes Unleashed</p>
                <div className="carousel w-full">
          
          <div id="slide1" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/5rCZ4rH/marvel.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a> 
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div> 
          <div id="slide2" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/XtLxfQv/transformers.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a> 
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div> 
          <div id="slide3" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/dcqYL0q/dc.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a> 
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div> 
        </div>
      </div>
    );
};

export default Gallery;