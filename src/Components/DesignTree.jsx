import data from "../data/data.json";
import { FaPlus } from "react-icons/fa6";
// import Curve from "./Curve";
import rightCurve from "../assets/rightCurve.svg";
import leftCurve from "../assets/leftCurve.svg";

const DesignTree = () => {
  return (
    <>
      <div className="w-screen min-h-[120vh] flex flex-col justify-start items-center py-10">
        <div className="">
          {data.map((el, index) => {
            return (
              <div key={index} className="tree flex flex-col items-center ">
                <div className=" overflow-hidden border border-neutral-400 rounded-md">
                  <p className="mx-auto text-center text-sm font-semibold bg-white w-[279px] py-3">
                    {el.title}
                  </p>
                </div>
                {!el.child && (
                  <div className="flex flex-col items-center">
                    <div className="line w-[1px] h-10 bg-neutral-300"></div>
                    <div className=" overflow-hidden border border-neutral-200 rounded-md w-[50px] h-9 flex justify-center items-center">
                      <FaPlus className="text-[#2F9089] text-sm" />
                    </div>
                    <div className="line w-[1px] h-10 bg-neutral-300"></div>
                  </div>
                )}
                {el.child && (
                  <div className="flex w-full justify-between">
                    {el.child.map((item, i) => {
                      return (
                        <div key={i} className="relative">
                          <div className="flex flex-col items-center justify-between">
                            <div className="line w-[1px] h-10 bg-neutral-300"></div>
                            <p className="px-3 py-[6px]  overflow-hidden border border-neutral-400 rounded text-xs font-medium bg-white text-[#242424]">
                              {item.title}
                            </p>
                          </div>
                          <div
                            className={`${
                              i === 1
                                ? "absolute left-[20%]"
                                : "absolute -left-[210%]"
                            }`}
                          >
                            {item.curve ? (
                              i === 1 ? (
                                <img
                                  src={rightCurve}
                                  alt=""
                                  className="ml-[10%]"
                                />
                              ) : (
                                <img
                                  src={leftCurve}
                                  alt=""
                                  className="ml-[50%]"
                                />
                              )
                            ) : (
                              <div className={`line w-[1px] h-10 bg-neutral-300 ${!item.curve && "ml-[10%]"}`}></div>
                            )}
                            {item.child.map((child, c) => {
                              return (
                                <div
                                  key={c}
                                  className={`${!item.curve && "-ml-[70%]"}`}
                                >
                                  <p className="mx-auto text-center text-sm border border-neutral-400 font-semibold bg-white w-[230px] py-3 rounded-md">
                                    {child.title}
                                  </p>
                                  {item.child.length > 1 && (
                                    <>
                                      {child ===
                                      item.child[item.child.length - 1] ? (
                                        ""
                                      ) : (
                                        <>
                                          <div className="line w-[1px] h-5 bg-neutral-300 mx-auto"></div>
                                          <div className="mx-auto overflow-hidden border border-neutral-200 rounded-md w-[50px] h-9 flex justify-center items-center">
                                            <FaPlus className="text-[#2F9089] text-sm" />
                                          </div>
                                          <div className="line w-[1px] h-5 bg-neutral-300 mx-auto"></div>
                                        </>
                                      )}
                                    </>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DesignTree;
