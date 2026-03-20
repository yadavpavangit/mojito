import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Cocktails from "./components/Cocktails";
import About from "./pages/About";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
    </main>
  );
}

export default App;
