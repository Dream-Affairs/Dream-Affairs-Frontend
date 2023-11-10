import Hero from './(components)/hero';
import Contact from './(components)/contact';
import Pricecards from './(components)/pricecards';
import Header from '../(components)/header';

const Pricing = () => {

  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />
      <Hero />
      <Pricecards />
      <Contact />
    </div>
  );
};

export default Pricing;
