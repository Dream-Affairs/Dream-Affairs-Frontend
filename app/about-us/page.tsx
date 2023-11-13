import Hero from './(components)/hero';
import Team from './(components)/team';
import ExternalLayout from '../(components)/External-Layout';
import Section2 from './(components)/section-2';
import AboutUs from './(components)/about';
import Values from './(components)/values';
import Contact from '../pricing/(components)/contact';

const About = () => {
  return (
      <ExternalLayout>
      <main className="w-full relative mb-[113px]">
        <Hero />
        <Section2/>
        <AboutUs/>
        <Values/>
        <Team/>
        <Contact/> 
      </main>
      </ExternalLayout>
  );
};

export default About;
