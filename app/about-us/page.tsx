import Image from 'next/image';
import RootLayout from '../layout';
import gallery1 from './(assets)/gallery-1.png'
import gallery2 from './(assets)/gallery-2.png'
import gallery3 from './(assets)/gallery-3.png'
import gallery4 from './(assets)/gallery-4.png'
import gallery5 from './(assets)/gallery-5.png'
import gallery6 from './(assets)/gallery-6.png'
import gallery7 from './(assets)/gallery-7.png'
import gallery8 from './(assets)/gallery-8.png'
import Hero from './(components)/hero';
import History from './(components)/history';
import Team from './(components)/team';
import Contact from './(components)/contact';
import Gallery from './(components)/gallery';
import Header from '../header/page';

const About = () => {
  const teamMembers = [
    {
      name: "[Founder's Name]",
      role: 'Founder & CEO',
      avatar: '',
      bio: "With a background in [relevant industry/experience], [Founder's Name] embarked on the journey of creating Dream Affair with a vision to revolutionize wedding planning. Their expertise in [specific expertise] has been instrumental in shaping the platform into what it is today.",
    },
    {
      name: "[CO- Founder's]",
      role: 'Co-Founder & Manager',
      avatar: '',
      bio: "W[Co-founder's Name] brings a wealth of experience in [relevant industry/experience] to Dream Affair. Their passion for [specific passion or expertise] has played a crucial role in driving innovation and ensuring the platform's success.",
    },
    {
      name: '[Team Member]',
      role: 'Role',
      avatar: '',
      bio: '[Team Member 1] is a [brief description of their background/experience]. Their dedication to [specific aspect or goal] has been invaluable in [mention specific contributions].',
    },
    {
      name: '[Team Member]',
      role: 'Role',
      avatar: '',
      bio: '[Team Member 2] is known for their [unique skill or expertise]. Their commitment to [specific aspect or goal] has significantly contributed to the success of Dream Affairs.',
    },
    {
      name: '[Team Member]',
      role: 'Role',
      avatar: '',
      bio: '[[Team Member 3] brings [relevant experience or expertise] to the team. Their creative approach to [specific aspect or goal] has been a driving force in [mention specific contributions].',
    },
    {
      name: '[Team Member]',
      role: 'Role',
      avatar: '',
      bio: '[Team Member 4] adds [specific expertise or skill set] to our dynamic team. Their passion for [related passion or expertise] has been a valuable asset in [mention specific contributions].',
    },
  ];
  const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8,]
  return (
    <RootLayout>
      <Header />
      <main className="w-full relative">
        {/* Hero */}
        <Hero/>
        {/* Our History */}
        <History/>
        {/* Our Team */}
        <Team teamMembers ={teamMembers}/>
        {/* Gallery */}
        <Gallery galleryImages = {galleryImages} />
        {/* Contact us */}
        <Contact/>
      </main>
    </RootLayout>
  );
};

export default About;
