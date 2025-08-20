import MyNavbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer"; 
import Projects from "./pages/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./components/Navbar.css";

function App(){
  return(
    <BrowserRouter>
      <div>
        <MyNavbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <main><Footer /></main>
      </div>
    </BrowserRouter>
  );
}

export default App;