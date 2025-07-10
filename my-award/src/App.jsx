import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import "./App.css";
import gsap from "gsap";


gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {
  return (
    <>
      <h1 className="text-3xl text-amber-700 flex-center">Om Namah Shivaya</h1>
    </>
  );
}

export default App;
