import React from "react";

interface Props {
  nextPage?: string;
  onClick: () => void;
}

const NextButton: React.FunctionComponent<Props> = ({ nextPage, onClick }) => (
  <div
    className="hidden lg:inline-flex justify-center shadow-xl fixed bottom-0 p-10 z-50 w-screen"
    onClick={onClick}
  >
    <div className="chevron"></div>
    <div className="chevron"></div>
    <div className="chevron"></div>
    <span className="text-primary text-2xl font-bold -mb-5 cursor-pointer">{nextPage}</span>
  </div>
);

export default NextButton;
