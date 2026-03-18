import PropTypes from "prop-types";
import { Children } from "react";

export default function SectionSubtitles({ children, className }) {
  SectionSubtitles.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  };
  const childrenArray = Children.toArray(children);
  return (
    <p
      className={`text-quaternary mb-[26px] tablet1:mb-[40px] desktop1:mb-[80px] text-paragraph4 font-secondFont ${className}`}
    >
      {childrenArray}
    </p>
  );
}
