import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import { Outlet } from "react-router-dom";
function MainLayout() {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
        <Footer />
        <Chatbot />
      </div>
    </>
  );
}

export default MainLayout;
