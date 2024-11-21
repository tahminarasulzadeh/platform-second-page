import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="flex justify-center mt-6 gap-[16px] relative z-0 max-w-[1800px]">
            <div className=" max-w-[500px] hover:border-b group h-[30px] hover:border-b-[3px] hover:border-b-[#8A4194] flex flex-col">
                <Link to="/homework-tracker" className="h-[20px] font-noto font-normal text-[16px] leading-[21.97px] cursor-pointer text-[#000000] group-hover:text-[#8A4194]"
              
                >Homework & Case study Tracker</Link>

            </div>

            <div className="hover:border-b group h-[30px]  hover:border-b-[3px] hover:border-b-[#8A4194] flex flex-col">
                <Link to="/weekly-grading" className="h-[20px] font-noto font-normal text-[16px] leading-[21.97px] cursor-pointer text-[#000000] group-hover:text-[#8A4194] ">Weekly Grading</Link>
            </div>


            <div className="hover:border-b group h-[30px] hover:border-b-[3px] hover:border-b-[#8A4194] flex flex-col">
                <Link to="/total-grading" className="h-[20px] font-noto font-normal text-[16px] leading-[21.97px] cursor-pointer text-[#000000] group-hover:text-[#8A4194] ">Total Grading of DSA Bootcamp</Link>
            </div>

            <div className="hover:border-b max-w-[240px] group h-[30px] hover:border-b-[3px] hover:border-b-[#8A4194] flex flex-col">
                <Link to="/midterm-results" className="h-[20px] font-noto font-normal text-[16px] leading-[21.97px] cursor-pointer text-[#000000] group-hover:text-[#8A4194] "> Midterm Exam Results</Link>
            </div>

            <div className="hover:border-b max-w-[240px] group h-[30px] hover:border-b-[3px] hover:border-b-[#8A4194] flex flex-col">
                <Link to="/final-results" className="h-[20px] font-noto font-normal text-[16px] leading-[21.97px] cursor-pointer text-[#000000] group-hover:text-[#8A4194] "> Final Exam Results</Link>
            </div>

            <div className="hover:border-b group h-[30px] hover:border-b-[3px] hover:border-b-[#8A4194] flex flex-col">
                <Link to="/capstone-project-results" className="h-[20px] font-noto font-normal text-[16px] leading-[21.97px] cursor-pointer text-[#000000] group-hover:text-[#8A4194] "> Capstone Project Result</Link>
            </div>

        </div>
    )
}

export default Header;