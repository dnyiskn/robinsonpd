import styles from "./page.module.css";
import HeroImage from "./components/HeroImage";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="bg-gray-100">
      <Navbar />
      <HeroImage />
      <AboutUs />
      <Contact />
      <Footer />
    </main>
  );
}
