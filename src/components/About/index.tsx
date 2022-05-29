import React, { useState } from "react";
import classNames from "classnames";
import {
  FaCircle,
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
} from "react-icons/fa";

import { DescriptionModel } from "../../interfaces";

interface Props {
  descriptions: Array<DescriptionModel>;
  firstName: string;
  lastName: string;
}

const About: React.FunctionComponent<Props> = ({
  descriptions,
  firstName,
  lastName,
}) => {
  const [current, setCurrent] = useState(0);
  const length = descriptions.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? current : current + 1);
  };

  if (!Array.isArray(descriptions) || length <= 0) {
    return null;
  }

  return (
    <div className="component relative items-center">
      <FaArrowAltCircleLeft
        size={42}
        className={classNames(["left-arrow", current === 0 ? "hidden" : null])}
        onClick={prevSlide}
      />
      <FaArrowAltCircleRight
        size={42}
        className={classNames([
          "right-arrow",
          current === length - 1 ? "hidden" : null,
        ])}
        onClick={nextSlide}
      />
      <section className="flex items-center justify-center sm:px-6 md:px-5 lg:px-10">
        {descriptions.map((description: DescriptionModel, index: number) => (
          <div
            key={index}
            className={classNames(
              "terminal shadow-2xl",
              index === current ? "slide active" : "slide disabled"
            )}
          >
            <div className="flex topRow">
              <FaCircle size={25} color="#FF6057" />
              <FaCircle size={25} color="#FFBD2E" />
              <FaCircle size={25} color="#27C93F" />
              <i className="fa fa-circle red" />
              <i className="amber" />
              <i className="green" />
            </div>
            <div className="window">
              <p>
                <span className="text-primary">
                  {firstName.toLowerCase()}
                  {lastName.toLowerCase()}/{description.label}{" "}
                  <span className="green"></span> ${" "}
                </span>
                {description.text}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;
