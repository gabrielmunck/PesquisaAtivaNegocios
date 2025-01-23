import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import InfoSection from "./components/InfoSection"
import SolutionSection from "./components/SolutionSection"
import LgpdSection from "./components/LgpdSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"



function App() {


  return (
    <>
      <div className=" min-h-screen w-full  relative overflow-hidden">
        <Header />
        <HeroSection />
        <InfoSection />
        <SolutionSection />
        <LgpdSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  )
}

export default App
