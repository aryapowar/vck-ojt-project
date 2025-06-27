import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import AdmissionPage from "./pages/AdmissionPage";
import './styles/Pages.css';
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";
import { useState } from "react";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperinfoPopup";



const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <div>
        {/* Your main application conteent */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Aryan Powar"
          studentPhotoUrl="/images/photo.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/courses" element={<CoursesPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/ApplyNow" element={<AdmissionPage/>}/>
        </Routes>
        <ChatbotComponent/>
      </Router>

    
    </div>
  )
}
export default App; 