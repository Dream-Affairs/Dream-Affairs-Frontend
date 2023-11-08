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
          sectionText={formOne.valid ? 'We will require some additional details' : 'Sign up'}
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
