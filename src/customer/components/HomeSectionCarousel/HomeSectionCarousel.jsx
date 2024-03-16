import React from "react";
import HomeSectionCart from "../HomeSectionCart/HomeSectionCart";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const HomeSectionCarousel = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 7 },
  };

  const items = [11,1,1,1,1,11,5].map((items)=><HomeSectionCart/>)
  return (
    <div>
      {" "}
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        responsive={responsive}
      />
    </div>
  );
};

export default HomeSectionCarousel;
