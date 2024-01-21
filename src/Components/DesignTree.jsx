import data from "../data/data.json";
import { FaPlus } from "react-icons/fa6";
import Curve from "./Curve";

const DesignTree = () => {
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="-mt-48">
          {data.map((el, index) => {
            return (
              <div key={index} className="tree flex flex-col items-center ">
                <div className=" overflow-hidden border-2 rounded-md">
                  <p className="mx-auto text-center text-sm font-semibold bg-white w-[279px] py-3">
                    {el.title}
                  </p>
                </div>
                {!el.child && (
                  <div className="flex flex-col items-center">
                    <div className="line w-[2px] h-10 bg-neutral-200"></div>
                    <div className=" overflow-hidden border-2 rounded w-[50px] h-9 flex justify-center items-center">
                      <FaPlus className="text-[#2F9089] text-sm" />
                    </div>
                    <div className="line w-[2px] h-10 bg-neutral-200"></div>
                  </div>
                )}
                {el.child && (
                  <div className="flex w-full justify-between">
                    {el.child.map((item, i) => {
                      return (
                        <div key={i} className="">
                          <div className="flex flex-col items-center justify-between">
                            <div className="line w-[2px] h-10 bg-neutral-200"></div>
                            <p className="px-3 py-[6px]  overflow-hidden border-2 rounded text-xs font-medium bg-white text-[#242424]">
                              {item.title}
                            </p>
                          </div>
                          {item.child && item.curve && (
                            <div className="flex ">
                              {item.child.map((child, cIndex) => {
                                return (
                                  <div key={cIndex} className="relative">
                                    <Curve child={child} id={i} />
                                  </div>
                                );
                              })}
                            </div>
                          )}
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
