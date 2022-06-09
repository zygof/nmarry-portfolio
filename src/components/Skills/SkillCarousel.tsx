import React, { useEffect, useState } from "react";
import ClassNames from "classnames";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

interface Props {
  children: Array<React.ReactNode>;
  show: number;
  isDarkMode?: boolean;
}

const SkillCarousel: React.FunctionComponent<Props> = ({
  children,
  show,
  isDarkMode,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - show) {
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
    <div className="flex flex-row skills">
      <div className="flex w-screen">
        <div
          className="carousel-content-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={(event: React.TouchEvent<HTMLDivElement>) =>
            handleTouchMove(event)
          }
        >
          {currentIndex > 0 && (
            <FaArrowAltCircleLeft
              size={42}
              className={ClassNames([
                "absolute text-blue-50 z-50 cursor-pointer skill-left-arrow transition-colors duration-300",
                isDarkMode ? "text-blue-50" : "text-primary",
              ])}
              onClick={prev}
            />
          )}

          <div
            className="carousel-content"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / show + show * 40)
              }%)`,
              width: `calc(100% / ${show})`,
            }}
          >
            {children}
          </div>
        </div>
      </div>
      {currentIndex < length - show && (
        <FaArrowAltCircleRight
          size={42}
          className={ClassNames([
            "absolute z-50 text-blue-50 cursor-pointer skill-right-arrow transition-colors duration-300",
            isDarkMode ? "text-blue-50" : "text-primary",
          ])}
          onClick={next}
        />
      )}
    </div>
  );
};

export default SkillCarousel;
