import RootLayout from '../layout';
import Hero from './(components)/hero';
import Team from './(components)/team';
import ExternalLayout from '../(components)/External-Layout';
import Section2 from './(components)/section-2';
import Section3 from './(components)/about';
import Section4 from './(components)/values';
import Contact from '../pricing/(components)/contact';

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
  return (
    <RootLayout>
      <ExternalLayout>
      <main className="w-full relative mb-[113px]">
        {/* Hero */}
        <Hero />
        <Section2/>
        <Section3/>
        <Section4/>
        <Team/>
        {/* <Contact/>  */}
      </main>
      </ExternalLayout>
    </RootLayout>
  );
};

export default About;
