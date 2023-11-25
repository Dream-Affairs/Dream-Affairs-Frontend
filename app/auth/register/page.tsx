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

  const [formOneError, setFormOneError] = React.useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  const [errorMessages, setErrorMessages] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const [formTwo, setFormTwo] = React.useState({
    yourFirstName: '',
    partnersFirstName: '',
    pickedADate: false,
    location: '',
  });

  const [formThree, setFormThree] = React.useState(false);

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
          <div>
            {formOne.valid === false ? (
              <One
                formOne={formOne}
                setFormOne={setFormOne}
                formOneError={formOneError}
                setFormOneError={setFormOneError}
                errorMessages={errorMessages}
                setErrorMessages={setErrorMessages}
              />
            ) : (
              <Two
                formOne={formOne}
                setFormOne={setFormOne}
                setFormOneError={setFormOneError}
                setErrorMessages={setErrorMessages}
                formTwo={formTwo}
                setFormTwo={setFormTwo}
                date={date}
                setDate={setDate}
                setFormThree={setFormThree}
              />
            )}
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default Register;
