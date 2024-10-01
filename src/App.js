import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Billing from "./components/Billing";
import CardDeal from "./components/CardDeal";
import Testimonials from "./components/Testimonials";
import Clients from "./components/Clients";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-primary ">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Clients />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
