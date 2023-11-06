import React from 'react';
import { ImSpinner8 } from 'react-icons/im';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DatePicker } from '../../(components)/DatePicker';
import { Checkbox } from '@/components/ui/checkbox';

interface FormTwoProps {
  formOne: {
    email: string;
    password: string;
    confirmPassword: string;
    valid: boolean;
  };
  setFormOne: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
      confirmPassword: string;
      valid: boolean;
    }>
  >;
  formTwo: {
    yourFirstName: string;
    partnersFirstName: string;
    pickedADate: boolean;
    location: string;
  };
  setFormTwo: React.Dispatch<
    React.SetStateAction<{
      yourFirstName: string;
      partnersFirstName: string;
      pickedADate: boolean;
      location: string;
    }>
  >;
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  setFormThree: React.Dispatch<React.SetStateAction<boolean>>;
}

const Two = ({ formOne, setFormOne, date, setDate, formTwo, setFormTwo, setFormThree }: FormTwoProps) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formError, setFormError] = React.useState({
    yourFirstName: false,
    partnersFirstName: false,
    eventDate: false,
    pickedADate: false,
    location: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormError((prev) => ({ ...prev, [e.target.id]: false }));
    const { id, value } = e.target;
    setFormTwo((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (formTwo.yourFirstName === '') {
      setFormError((prev) => ({ ...prev, yourFirstName: true }));
      return;
    }
    if (formTwo.partnersFirstName === '') {
      setFormError((prev) => ({ ...prev, partnersFirstName: true }));
      return;
    }
    if (formTwo.pickedADate === false && date === undefined) {
      setFormError((prev) => ({ ...prev, eventDate: true }));
      return;
    }
    if (formTwo.location === '') {
      setFormError((prev) => ({ ...prev, location: true }));
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormThree(true);
    }, 2000);
  };
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Label htmlFor="yourFirstName">Your First Name</Label>
        <Input
          id="yourFirstName"
          type="text"
          placeholder="Chinaza"
          errorMessage="Please fill out this field"
          error={formError.yourFirstName}
          hasValue={formTwo.yourFirstName !== '' ? true : false}
          value={formTwo.yourFirstName}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="partnersFirstName">Your Partner&apos;s First Name</Label>
        <Input
          id="partnersFirstName"
          type="text"
          placeholder="Chinedu"
          errorMessage="Please fill out this field"
          error={formError.partnersFirstName}
          hasValue={formTwo.partnersFirstName !== '' ? true : false}
          value={formTwo.partnersFirstName}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="eventDate">Event Date</Label>
        <DatePicker
          disabled={formTwo.pickedADate ? true : false}
          date={formTwo.pickedADate ? undefined : date}
          setDate={setDate}
          error={formError.eventDate}
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="pickedADate"
          onCheckedChange={() => {
            setFormError((prev) => ({ ...prev, eventDate: false }));
            setFormTwo((prev) => ({ ...prev, pickedADate: !prev.pickedADate }));
          }}
        />
        <label
          htmlFor="pickedADate"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          We&rsquo;ve not picked a date
        </label>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          type="text"
          placeholder="Buerno Vista, Florida"
          errorMessage="Please fill out this field"
          error={formError.location}
          hasValue={formTwo.location !== '' ? true : false}
          value={formTwo.location}
          onChange={handleInputChange}
        />
      </div>
      <Button
        variant="default"
        className="flex items-center justify-center gap-2"
        onClick={handleSubmit}
        disabled={isSubmitting}
      >
        {isSubmitting ? <ImSpinner8 className="animate-spin" /> : null}
        {isSubmitting ? 'Signing up' : 'Sign up'}
      </Button>
      <p className="text-sm text-center">
        Not {formOne.email}?{' '}
        <span
          className="text-primary cursor-pointer"
          onClick={() => {
            setFormOne({
              email: '',
              password: '',
              confirmPassword: '',
              valid: false,
            });
            setFormTwo({
              yourFirstName: '',
              partnersFirstName: '',
              pickedADate: false,
              location: '',
            });
          }}
        >
          Go back
        </span>
      </p>
    </div>
  );
};

export default Two;
