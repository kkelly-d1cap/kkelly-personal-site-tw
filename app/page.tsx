import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ChooseYourPath from './components/ChooseYourPath';
import TeamBuilding from './components/TeamBuilding';
import FeaturedProject from './components/FeaturedProject';
import { featuredProject } from '@/content/featuredProject';
import FindMe from './components/FindMe';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ChooseYourPath />
        <TeamBuilding />
        <FeaturedProject {...featuredProject} />
        <FindMe />
      </main>
      <Footer />
    </>
  );
}
