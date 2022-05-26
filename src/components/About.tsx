import React, { RefObject, useState } from "react";
import classNames from "classnames";
import {
  FaCircle,
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
} from "react-icons/fa";

import { DescriptionModel } from "../interfaces";

interface Props {
  customRef: RefObject<HTMLDivElement>;
  descriptions: Array<DescriptionModel>;
  firstName: string;
  lastName: string;
}

const About: React.FunctionComponent<Props> = ({
  customRef,
  descriptions,
  firstName,
  lastName,
}) => {
  const [current, setCurrent] = useState(0);
  const length = descriptions.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(descriptions) || length <= 0) {
    return null;
  }

  return (
    <div ref={customRef} className="component relative items-center">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      <section className="flex items-center justify-center">
        {descriptions.map((description: DescriptionModel, index: number) => (
          <div
            key={index}
            className={classNames(
              "terminal",
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
