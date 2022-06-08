import React, { useEffect, useState } from "react";
import ClassNames from "classnames";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

interface Props {
  children: Array<React.ReactNode>;
}

const Carousel: React.FunctionComponent<Props> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touchDown = event.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = event.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  return (
    <div className="flex flex-col">
      <div className="flex">
        <div
          className="carousel-content-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={(event: React.TouchEvent<HTMLDivElement>) =>
            handleTouchMove(event)
          }
        >
          <div
            className="carousel-content"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {children}
          </div>
        </div>
      </div>
      <div className="arrow-container flex flex-row justify-center space-x-20 py-5">
        <FaArrowAltCircleLeft
          size={42}
          className={ClassNames([
            "project-left-arrow",
            currentIndex > 0 ? "" : "invisible",
          ])}
          onClick={prev}
        />
        <FaArrowAltCircleRight
          size={42}
          className={ClassNames([
            "project-right-arrow",
            currentIndex < length - 1 ? "" : "invisible",
          ])}
          onClick={next}
        />
      </div>
    </div>
  );
};

export default Carousel;
