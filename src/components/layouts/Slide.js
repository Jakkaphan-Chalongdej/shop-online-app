import Slider from "react-animated-slider";
import React from "react";

export default function Slide({ content }) {
  return (
    <div className="mobile  fullscreen">
      <Slider  autoplay={2000}>
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.image}') no-repeat center center `,
              backgroundSize: "100%",
            }}
          >
            <div className="inner ">
              <h1>{item.title}</h1>
              <p>{item.description}</p>

              {/* <Link to={item.href}>
                <button className='buttonslide'>{item.button}</button>
              </Link> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
