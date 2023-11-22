import Contact from '../pricing/(components)/contact';
import Hero from './(components)/hero';
import ContactCard from './(components)/contactCard';
import ExternalLayout from '../(components)/External-Layout';

const Pricing = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <ExternalLayout>
        <Hero />
        <ContactCard />
        <Contact />
      </ExternalLayout>
    </div>
  );
};

export default Pricing;
