import Header from "./header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomeworkTracker from "./routePages/HomeworkTracker";
import WeeklyGrading from "./routePages/WeeklyGrading";
import TotalGrading from "./routePages/TotalGrading";
import MidtermResults from "./routePages/MidtermResults";
import FinalResults from "./routePages/FinalResults";
import CapstoneProjectResults from "./routePages/CapstoneProjectResults";

function MainPage() {
    return (
        <Router>
            <div className="flex ml-[15px] flex-col">
                <Header />
                <Routes>
                    <Route path="/homework-tracker" element={<HomeworkTracker />} />
                </Routes>

                <Routes>
                    <Route path="/weekly-grading" element={<WeeklyGrading />} />
                </Routes>

                <Routes>
                    <Route path="/total-grading" element={<TotalGrading />} />
                </Routes>

                <Routes>
                    <Route path="/midterm-results" element={<MidtermResults />} />
                </Routes>


                <Routes>
                    <Route path="/final-results" element={<FinalResults />} />
                </Routes>

                <Routes>
                    <Route path="/capstone-project-results" element={<CapstoneProjectResults />} />
                </Routes>
            </div>
        </Router>

    )
}

export default MainPage;