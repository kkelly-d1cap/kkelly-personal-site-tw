import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProject from './components/FeaturedProject';
import Experience from './components/Experience';
import FindMe from './components/FindMe';
import Footer from './components/Footer';
import { featuredProject } from '@/content/featuredProject';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedProject {...featuredProject} />
        <Experience />
        <FindMe />
      </main>
      <Footer />
    </>
  );
}
