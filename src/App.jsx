import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Cocktails from "./components/Cocktails";
import About from "./pages/About";
import Art from "./pages/Art";
import Menu from "./pages/Menu";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
    </main>
  );
}

export default App;
