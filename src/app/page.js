import styles from "./page.module.css";
import HeroImage from "./components/HeroImage";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";
export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <HeroImage />
      <AboutUs />
    </main>
  );
}
