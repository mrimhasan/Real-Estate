// In React versions prior to 17, you needed to import React in every component file that used JSX. This was because JSX is a syntax extension that needs to be transformed into regular JavaScript code by the Babel compiler. The React module contained the functions necessary for this transformation


// You no longer need to import React from "react". Starting from the release 17 of React, JSX is automatically transformed without using React.createElement.
// However, other exports like hooks must be imported.
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App(){

  return (
    <div className="w-full overflow-hidden">
    <ToastContainer/>
    <Header/>
    <About/>
    <Projects/>
    <Testimonials/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App;