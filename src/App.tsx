import ContactSection from "./components/ContactSection"
import HeroSection from "./components/HeroSection"
import InfoSection from "./components/InfoSection"
import LgpdSection from "./components/LgpdSection"
import SolutionSection from "./components/SolutionSection"



function App() {


  return (
    <>
      <div className=" min-h-screen w-screen  relative overflow-hidden">
        <HeroSection />
        <InfoSection />
        <SolutionSection />
        <LgpdSection />
        <ContactSection />
      </div>
    </>
  )
}

export default App
