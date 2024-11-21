
import React, { useState } from "react";

interface MyComponentProps {
    svg: JSX.Element;
    name: string;
    isOpen: boolean;
     arr: string[];
    onToggle: () => void;

}

const Dropdown: React.FC<MyComponentProps> = ({ svg, name, isOpen, arr, onToggle }) => {

    return (
        <div>
            <div
                className={`flex w-[255px] cursor-pointer pb-2 px-5 pt-1 mt-3 group hover:bg-[#8A4194] rounded-md justify-between ${isOpen ? " gropup bg-[#8A4194] rounded-md " : ""}`}
                onClick={onToggle}
            >
                <div className="flex justify-center mt-3">
                    <div>{svg}</div>
                    <h1 className={`font-noto ml-3 text-[16px] font-medium leading-[21.97px] group-hover:text-white ${isOpen && "text-white"}`}>
                        {name}
                    </h1>
                </div>
                <div className={`h-[24px] w-[24px] rounded-xl  hover:bg-[#AA74B1] "h-[24px] mt-[8px]   relative }`}>
                    <p className={`text-[#A8A8A8]  absolute font-medium h-[20px] mt-[-10px]  group-hover:text-white text-[27px] ${isOpen ? "text-white  ml-[6px] " : "ml-[3px] "} `}>{isOpen ? "-" : "+"}</p>
                </div>
            </div>
            {isOpen ? <div className="  max-h-[265px] flex  w-[200px]">
                <div className="  bg-[#AA74B1] w-[2px] min-h-[40px] mt-[20px] mx-[20px] "></div>
                <ul className="mt-5">

                    {
                        arr.map((item, index:number) => (
                            <li key={index} className="font-noto mt-2 font-medium text-[16px] leading-[19.97px] cursor-pointer text-[#000000] ">{item}</li>
                        ))
                    }

                  
                   

                </ul>
            </div> : null}
        </div>
    );
};

export default Dropdown;
