import PropTypes from "prop-types";
import { Children } from "react";

export default function SectionArea({ children, className, id }) {
  SectionArea.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    id: PropTypes.any,
  };
  const childrenArray = Children.toArray(children);
  return (
    <div
      id={id}
      className={`w-full py-[40px] flex flex-col items-center tablet1:py-[64px] desktop1:py-[96px] ${className}`}
    >
      {childrenArray}
    </div>
  );
}
