'use client';
import React from 'react';
import bg1 from '../(assets)/image1.svg';
import bg2 from '../(assets)/image2.svg';
import Wrapper from '../(components)/Wrapper';
import One from './(forms)/one';
import Two from './(forms)/two';
import LinkSent from './(forms)/three';

const Register = () => {
  const [formOne, setFormOne] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
    valid: false,
  });

  const [date, setDate] = React.useState<Date>();

  const [formTwo, setFormTwo] = React.useState({
    yourFirstName: '',
    partnersFirstName: '',
    pickedADate: false,
    location: '',
  });

  const [formThree, setFormThree] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormThree(true);
  };

  const array = [
    {
      expand: 'renderedFields,names,schema,operations,editmeta,changelog,versionedRepresentations',
      id: '10001',
      self: 'https://rafaelmiranda.atlassian.net/rest/api/2/issue/10001',
      key: 'TES-1',
      fields: {
        priority: {
          self: 'https://rafaelmiranda.atlassian.net/rest/api/2/priority/3',
          iconUrl: 'https://rafaelmiranda.atlassian.net/images/icons/priorities/medium.svg',
          name: 'Medium1',
          id: '3',
        },
      },
    },
    {
      expand: 'renderedFields,names,schema,operations,editmeta,changelog,versionedRepresentations',
      id: '10002',
      self: 'https://rafaelmiranda.atlassian.net/rest/api/2/issue/10001',
      key: 'TES-2',
      fields: {
        priority: {
          self: 'https://rafaelmiranda.atlassian.net/rest/api/2/priority/3',
          iconUrl: 'https://rafaelmiranda.atlassian.net/images/icons/priorities/medium.svg',
          name: 'Medium2',
          id: '3',
        },
      },
    },
  ];

  array.map((el) => {
    if (el.fields.priority.name === 'Medium2') {
      console.log(el.key);
    }
  });

  return (
    <>
      {formThree ? (
        <LinkSent formOne={formOne} />
      ) : (
        <Wrapper
          bg={formOne.valid === false ? bg1 : bg2}
          bgColor={formOne.valid === false ? 'bg-[#371345] bg-opacity-20' : 'bg-[#013440] bg-opacity-50'}
          bgText="Create your account to start planning, organizing, and sharing your special day with our comprehensive wedding planning and management application. Your dream wedding journey begins here."
          bgTitle="Join Dream Affairs and Make Your Event a Reality!"
          sectionText={formOne.valid ? 'We will require some additional details' : 'Let’s get you Started '}
          sectionTitle={formOne.valid ? 'Lets get planning' : 'Sign up'}
          showBgText={true}
        >
          <form onSubmit={handleSubmit}>
            {formOne.valid === false ? (
              <One formOne={formOne} setFormOne={setFormOne} />
            ) : (
              <Two
                formOne={formOne}
                setFormOne={setFormOne}
                formTwo={formTwo}
                setFormTwo={setFormTwo}
                date={date}
                setDate={setDate}
                setFormThree={setFormThree}
              />
            )}
          </form>
        </Wrapper>
      )}
    </>
  );
};

export default Register;
