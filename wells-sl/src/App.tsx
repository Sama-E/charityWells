import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";

import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
// import Project from "@/scenes/project";
// import Impact from "@/scenes/impact";
import ContactUs from "@/scenes/contact";
import Footer from "@/scenes/footer";
import Wells from "./scenes/wells";
import Mission from "./scenes/mission";
import Works from "./scenes/work";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>
  (SelectedPage.Home);
  const[isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  // Location on Page - handleScroll
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0)setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}/>
      <Home setSelectedPage={setSelectedPage}/>
      <Mission setSelectedPage={setSelectedPage}/>
      <Wells setSelectedPage={setSelectedPage}/>
      {/* <Project setSelectedPage={setSelectedPage}/> */}
      <Works setSelectedPage={setSelectedPage}/>
      {/* <Impact setSelectedPage={setSelectedPage}/> */}
      <ContactUs setSelectedPage={setSelectedPage}/>
      {/* <Donate /> */}
      <Footer />
    </div>
  )
}

export default App;
