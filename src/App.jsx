import {
  Navbar,
  Home,
  About,
  Contact,
  Courses,
  Footer,
} from "./components/index";

function App() {
  return (
    <div className="font-Poppins bg-Solitude">
      <Navbar />
      <Home />
      <About />
      <Courses />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
