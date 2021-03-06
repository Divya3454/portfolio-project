import  './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar.js";
import Header from "./components/Header";
function App() {
  return (
    <>
    <Particles 
    className="particles-canvas"
    params={{
      particles: {
        number: {
          value: 30,
          density: {
            enable: true,
            value: 900
          }
        },
        shape:{
          type: "circle",
         stroke: {
           width: 6,
           color: "#ef4035"
         } 
        }
      }
    }}
    />
   <Navbar/>
   <Header/>
   </>
  );
}

export default App;
