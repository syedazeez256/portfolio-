import Home from "./components/Home";
import AppLayout from "./layout";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <AppLayout>
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
      </AppLayout>
    </div>
  );
}

export default App;
