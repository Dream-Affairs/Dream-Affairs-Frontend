import React from 'react';
import { ImSpinner8 } from 'react-icons/im';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DatePicker } from '../../(components)/DatePicker';
import { Checkbox } from '@/components/ui/checkbox';
import { isEmpty } from '../../(helpers)/helpers';
import { toast } from '@/components/ui/use-toast';
import axios from 'axios';

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
  setFormOneError: React.Dispatch<
    React.SetStateAction<{
      email: boolean;
      password: boolean;
      confirmPassword: boolean;
    }>
  >;
  setErrorMessages: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
      confirmPassword: string;
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

const Two = ({
  formOne,
  setFormOne,
  setFormOneError,
  setErrorMessages,
  date,
  setDate,
  formTwo,
  setFormTwo,
  setFormThree,
}: FormTwoProps) => {
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

  const handleSubmit = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    setFormError({
      yourFirstName: false,
      partnersFirstName: false,
      eventDate: false,
      pickedADate: false,
      location: false,
    });
    const url = process.env.NEXT_PUBLIC_API_URL;
    if (isEmpty(formTwo.yourFirstName)) {
      setFormError((prev) => ({ ...prev, yourFirstName: true }));
      return;
    }

    if (isEmpty(formTwo.partnersFirstName)) {
      setFormError((prev) => ({ ...prev, partnersFirstName: true }));
      return;
    }

    if (!formTwo.pickedADate && !date) {
      setFormError((prev) => ({ ...prev, eventDate: true }));
      return;
    }

    if (isEmpty(formTwo.location)) {
      setFormError((prev) => ({ ...prev, location: true }));
      return;
    }

    try {
      setIsSubmitting(true);
      await axios.post(`${url}/auth/signup`, {
        email: formOne.email,
        password: formOne.password,
        confirm_password: formOne.confirmPassword,
        first_name: formTwo.yourFirstName,
        partner_name: formTwo.partnersFirstName,
        event_date: formTwo.pickedADate ? null : date,
        location: formTwo.location,
      });

      toast({
        title: 'Account Created',
        description: 'Please check your email for a verification link',
      });
      setTimeout(() => {
        // setFormThree(true);
        window.location.href = '/dashboard';
      }, 1500);
    } catch (error: any) {
      const response = error.response.data.message;
      const status = error.response.status;
      // const email = error.response.data.detail[0].msg;

      // if (email) {
      //   toast({ title: 'An error occured', description: 'Please enter a valid email address' });
      //   setFormOne((prev) => ({ ...prev, valid: false }));
      //   setFormOneError((prev) => ({ ...prev, email: true }));
      //   setErrorMessages((prev) => ({ ...prev, email: 'Please enter a valid email address' }));
      //   return;
      // }

      toast({ title: 'An error occured', description: response });
      if (response.includes('Email')) {
        setFormOne((prev) => ({ ...prev, valid: false }));
        setFormOneError((prev) => ({ ...prev, email: true }));
        setErrorMessages((prev) => ({ ...prev, email: response }));
        return;
      }
      if (response.includes('Password')) {
        setFormOne((prev) => ({ ...prev, valid: false }));
        setFormOneError((prev) => ({ ...prev, password: true }));
        setErrorMessages((prev) => ({ ...prev, password: response }));
        return;
      }
    } finally {
      setIsSubmitting(false);
    }
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
          autoComplete="given-name"
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
          autoComplete="given-name"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Event Date
        </p>
        <div>
          <DatePicker
            disabled={formTwo.pickedADate ? true : false}
            date={formTwo.pickedADate ? undefined : date}
            setDate={setDate}
            error={formError.eventDate}
          />
          {!date && formError.eventDate && <p className="text-red-500 text-xs">Please fill out this field</p>}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="pickedADate"
          name="pickedADate"
          onCheckedChange={() => {
            setFormError((prev) => ({ ...prev, eventDate: false }));
            setFormTwo((prev) => ({ ...prev, pickedADate: !prev.pickedADate }));
          }}
        />
        <Label
          htmlFor="pickedADate"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          We&rsquo;ve not picked a date
        </Label>
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
          autoComplete="country"
        />
      </div>
      <Button
        variant={isSubmitting ? 'disabled' : 'secondary'}
        disabled={isSubmitting ? true : false}
        className="flex gap-3"
        onClick={handleSubmit}
      >
        {isSubmitting ? <ImSpinner8 className="animate-spin" /> : null}
        {isSubmitting ? 'Please wait' : 'Sign Up'}
      </Button>

      <p className="text-sm text-center">
        Not {formOne.email}?{' '}
        <span
          className="text-primary cursor-pointer"
          onClick={() => {
            setFormOne((p) => ({
              ...p,
              valid: false,
            }));
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
