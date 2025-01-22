import HeroSection from "./components/HeroSection"
import InfoSection from "./components/InfoSection"
import SolutionSection from "./components/SolutionSection"



function App() {


  return (
    <>
      <div className=" min-h-screen w-screen relative overflow-hidden">
        <HeroSection />
        <InfoSection />
        <SolutionSection />
      </div>
    </>
  )
}

export default App
