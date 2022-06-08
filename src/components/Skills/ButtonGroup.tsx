import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

interface Props {
  next?: () => void;
  previous?: () => void;
}

const ButtonGroup: React.FunctionComponent<Props> = ({ next, previous }) => (
  <div className="flex w-full">
    <div className="button_group">
      <button onClick={previous} aria-label="Previous">
        <IoIosArrowRoundBack />
      </button>
      <button onClick={next} aria-label="Next">
        <IoIosArrowRoundForward />
      </button>
    </div>
  </div>
);
/*
const styles = {
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    mb: -4,
    button: {
      bg: "transparent",
      border: "0px solid",
      fontSize: 40,
      cursor: "pointer",
      px: "2px",
      color: "#BBC7D7",
      transition: "all 0.25s",
      "&:hover": {
        color: "text",
      },
      "&:focus": {
        outline: 0,
      },
    },
  },
};
*/

export default ButtonGroup;
