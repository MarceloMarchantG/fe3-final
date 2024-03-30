
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import { ContextProvider } from "./Components/utils/global.context";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <div className="App">  
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favs" element={<Favs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="*" element={<Home />} /> 
            </Routes>
          <Footer/>
        </div>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
