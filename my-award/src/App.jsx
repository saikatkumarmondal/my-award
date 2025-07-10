import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import "./App.css";
import gsap from "gsap";
import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";


gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {
  return (
    <main>
      {/* <h1 className="text-3xl text-amber-700 flex-center">Om Namah Shivaya</h1> */}
      <Navbar />
      <Hero />
      <div className="h-dvh bg-black" />
    </main>
  );
}

export default App;
