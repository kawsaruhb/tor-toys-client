import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel rounded-lg w-full h-[450px]">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://i.ibb.co/qFYPbYc/29806502-7611503.jpg" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://i.ibb.co/M7yrBBc/12290936-Colorful-posters-design-with-stylish-cars.jpg" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://i.ibb.co/qmwth9d/5655196-57638.jpg" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div>
    );
};

export default Banner;