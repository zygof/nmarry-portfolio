import React from "react";
import Carousel, { ResponsiveType } from "react-multi-carousel";

import { SkillElementModel } from "../../interfaces";
//import ButtonGroup from "./ButtonGroup";

interface CarouselSkillProps {
  elements: Array<SkillElementModel>;
}

const responsive: ResponsiveType = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
  },
};

const SkillElements: React.FunctionComponent<CarouselSkillProps> = ({
  elements,
}) => (
  <Carousel
    additionalTransfrom={0}
    arrows
    autoPlaySpeed={3000}
    centerMode={false}
    className=""
    containerClass="carousel-container w-full"
    //customButtonGroup= <ButtonGroup />
    dotListClass=""
    draggable
    infinite
    itemClass="mx-3"
    keyBoardControl
    minimumTouchDrag={80}
    renderButtonGroupOutside
    responsive={responsive}
    sliderClass=""
    slidesToSlide={1}
  >
    {elements.map((element: SkillElementModel, index: number) => (
      <div
        key={index}
        className="skill-element flex flex-col items-center bg-primary text-blue-50 rounded-xl p-3"
      >
        {<element.icon size={32} />}
        <p className="text-lg font-semibold pt-3">{element.name}</p>
      </div>
    ))}
  </Carousel>
);

export default SkillElements;
