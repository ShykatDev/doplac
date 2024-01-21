/* eslint-disable react/prop-types */
import { FaPlus } from "react-icons/fa6";

const Curve = ({ child, id }) => {
  let left;
  if (id === 0) {
    left = true;
  }
  return (
    <>
      {left ? (
        <div className=" absolute -left-[20px] -top-1">
          <div className="flex flex-col items-center relative h-[120px]">
            <div className="leftCurve bottom-[8%] -left-[31%] -z-10"></div>
            <div className="overflow-hidden border-2 border-[#d5d5d5] rounded w-[45px] h-8 my-10 flex justify-center items-center bg-white">
              <FaPlus className="text-[#2F9089] text-sm" />
            </div>
            <div className="leftCurve top-[2%] rotate-180 -right-[32%] -z-10"></div>
            <div className=" absolute top-[92%] bg-white">
              <p className="text-center text-sm font-semibold w-[250px] py-3 overflow-hidden border-2 rounded bg-white">
                {child.title}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className=" absolute left-[50px] -top-1">
          <div className="flex flex-col items-center relative h-[120px]">
            <div className="rightCurve bottom-[52%] -left-[28%] -z-10"></div>
            <div className="overflow-hidden border-2 border-[#d5d5d5] rounded w-[45px] h-8 my-10 flex justify-center items-center bg-white">
              <FaPlus className="text-[#2F9089] text-sm" />
            </div>
            <div className="rightCurve top-[48%] rotate-180 -right-[28%] -z-10"></div>
            <div className=" absolute top-[92%] bg-white">
              <p className="text-center text-sm font-semibold w-[250px] py-3 overflow-hidden border-2 rounded">
                {child.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Curve;
