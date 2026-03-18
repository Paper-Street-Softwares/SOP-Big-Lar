import MotionDivUpToDown from "../animation/MotionDivUpToDown";
import PropTypes from "prop-types";

export default function ResultsCard(props) {
  const { number, text, icon } = props;

  ResultsCard.propTypes = {
    number: PropTypes.any,
    text: PropTypes.any,
    icon: PropTypes.any,
  };

  return (
    <div className="bg-gray-700 flex flex-row text-center items-center my-[10%] phone1:my-[5%] w-full tablet1:my-[3%] tablet1:w-[45%] desktop1:my-0 font-poppins desktop1:mx-3">
      <div className="flex flex-col justify-center  ml-[5%] font-mainFont">
        <div className="flex flex-col justify-start font-extrabold leading-none text-white text-title2 phone1:text-title4 phone2:text-title5 desktop1:text-title6">
          <MotionDivUpToDown>{number}</MotionDivUpToDown>
        </div>
        <div className="text-center text-white text-paragraph1 phone1:text-paragraph3 phone2:text-paragraph3 phone3:text-paragraph4 tablet1:text-paragraph3 desktop1:text-paragraph2 desktop2:text-paragraph3">
          <MotionDivUpToDown>
            <p>{text}</p>
          </MotionDivUpToDown>
        </div>
      </div>
    </div>
  );
}
