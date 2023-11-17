import Hero from './(components)/hero';
import Team from './(components)/team';
import ExternalLayout from '../(components)/External-Layout';
import Values from './(components)/values';
import Contact from '../pricing/(components)/contact';
import AboutUs from './(components)/about';

const About = () => {
  return (
    <ExternalLayout>
      <main className="w-full relative flex flex-col justify-center">
        <Hero />
        <AboutUs />
        <Values />
        <Team />
        <Contact />
      </main>
    </ExternalLayout>
  );
};

export default About;
