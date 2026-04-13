import "./App.css";
import { About } from "./components/about/About";
import { Contact } from "./components/contract/Contact";
import { Footer } from "./components/footer/Footer";
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { Services } from "./components/services/Services";

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="app__main">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}