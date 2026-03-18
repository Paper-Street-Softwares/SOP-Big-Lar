import MotionDivUpToDown from "../animation/MotionDivUpToDown";
import PropTypes from "prop-types";

export default function ResultsCardIcon(props) {
  const { number, text, icon } = props;

  ResultsCardIcon.propTypes = {
    number: PropTypes.any,
    text: PropTypes.any,
    icon: PropTypes.any,
  };

  return (
    <div className="flex flex-row items-center my-[10%] phone1:my-[5%] w-full tablet1:my-[3%] tablet1:w-[45%] desktop1:my-0 font-poppins desktop1:mx-3">
      <div className="flex flex-col rounded-2xl justify-center items-center h-[68px] w-[68px] phone1:h-[86px] phone1:w-[86px] phone2:h-[74px] phone2:w-[74px] tablet2:h-[82px] tablet2:w-[82px] desktop1:h-[78px] desktop1:w-[60px] border-solid border-[3px] border-primary">
        {icon}
      </div>
      <div className="flex flex-col justify-center flex-1 ml-[5%] font-mainFont">
        <div className="flex flex-col justify-start font-extrabold leading-none text-white text-title2 phone1:text-title4 phone2:text-title5 desktop1:text-title4">
          <MotionDivUpToDown>{number}</MotionDivUpToDown>
        </div>
        <div className="text-left text-white text-paragraph1 phone1:text-paragraph3 phone2:text-paragraph3 phone3:text-paragraph4 tablet1:text-paragraph3 desktop1:text-paragraph2 desktop2:text-paragraph3">
          <MotionDivUpToDown>
            <p>{text}</p>
          </MotionDivUpToDown>
        </div>
      </div>
    </div>
  );
}
