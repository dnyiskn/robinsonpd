import HeroImage from "./components/HeroImage";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";
export default function Home() {
  return (
    <main className="bg-gray-100">
      <Navbar />
      <HeroImage />
      <Services />
      <AboutUs />
      <Contact />
      <Footer />
    </main>
  );
}
