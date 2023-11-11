import Hero from './(components)/hero';
import Contact from './(components)/contact';
import Pricecards from './(components)/pricecards';
import ExternalLayout from '../(components)/External-Layout';

const Pricing = () => {

  return (
    <div className='max-w-[1440px] mx-auto'>
    <ExternalLayout>
      <Hero />
      <Pricecards />
      <Contact />
    </ExternalLayout>
    </div>
  );
};

export default Pricing;
