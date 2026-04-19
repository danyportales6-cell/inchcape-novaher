import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home";
import Actions from "./pages/Actions";
import ReportCases from "./pages/ReportCases";
import TRIVIA from "./components/INICIO/TRIVIA/";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/acciones" element={<Actions />} />
          <Route path="/reportar" element={<ReportCases />} />
          <Route path="/TRIVIA" element={<TRIVIA />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
