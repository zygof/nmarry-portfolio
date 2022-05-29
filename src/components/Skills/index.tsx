import React from "react";
import Carousel from "react-multi-carousel";
import { SkillModel } from "../../interfaces";

interface Props {
  skills: Array<SkillModel>;
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Skills: React.FunctionComponent<Props> = ({ skills }) => (
  <div className="component flex flex-col items-center justify-center p-10">
    <p className="w-full pl-10">Frontend</p>
    <Carousel
      additionalTransfrom={0}
      arrows
      centerMode={false}
      className=""
      containerClass="container-with-dots w-full"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {skills.map((skill: SkillModel, index: number) => (
        <div
          key={index}
          className="flex flex-col border-2 border-gray-300 rounded-xl m-10 p-5"
        >
          {skill.icon}
          <p className="text-xl font-semibold mt-4">{skill.name}</p>
        </div>
      ))}
    </Carousel>

    {/*skills.map((skill: SkillModel, index: number) => (
      <div
        key={index}
        className="flex flex-col border-2 border-gray-300 rounded-xl m-10 p-5"
      >
        {skill.icon}
        <p className="text-xl font-semibold mt-4">{skill.name}</p>
      </div>
    ))*/}
  </div>
);

export default Skills;
