import Sidebar from "./components/siderbar";
import MainPage from "./components/mainPage";
import HomeworkTracker from "./components/routePages/HomeworkTracker";

import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
  return (

     <div className="flex">
      <Sidebar />
      <MainPage />
     </div>

 
  )
}

export default App
