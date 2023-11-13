import ExternalLayout from './(components)/External-Layout';
import Betterhalf from './(components)/betterhalf';
import Care from './(components)/care';
import Carousel from './(components)/carousel';
import Herosection from './(components)/herosection';
import Importance from './(components)/importance';
import Frame1 from '../app/(components)/(assets)/frame1.svg';
import Frame2 from '../app/(components)/(assets)/frame2.svg';
import Frame3 from '../app/(components)/(assets)/frame3.svg';
import Frame4 from '../app/(components)/(assets)/frame4.svg';
import Frame5 from '../app/(components)/(assets)/frame5.svg';
import Frame6 from '../app/(components)/(assets)/frame6.svg';
import Frame7 from '../app/(components)/(assets)/frame7.svg';
import Frame8 from '../app/(components)/(assets)/frame4.svg';
import Faq from './(components)/faq';
import Contact from './(components)/contact';
import Final from './(components)/final';

export default function Home() {
  const betterHalfImages = [Frame1, Frame2, Frame3, Frame4, Frame5, Frame6, Frame7, Frame8];

  return (
    <>
      <ExternalLayout>
        <Herosection />
        <Carousel />
        <Importance />
        <Care />
        <Betterhalf betterHalfImages={betterHalfImages} />
        <Faq />
        <Contact />
        <Final />
      </ExternalLayout>
    </>
  );
}
