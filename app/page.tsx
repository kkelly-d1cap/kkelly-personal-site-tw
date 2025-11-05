import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Experience from './components/Experience';
import FindMe from './components/FindMe';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
        <Experience />
        <FindMe />
      </main>
      <Footer />
    </>
  );
}
