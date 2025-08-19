import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer"; 
import "./App.css";
import "./components/Navbar.css";

function App(){
  return(
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;