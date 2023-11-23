import React from 'react';
import Subtitle from './subtitle';
import DynamicInput from './DynamicInput';
import { Button } from '@/components/ui/button';

const ChangePassword = () => {
  const [form, setForm] = React.useState({
    currentpswd: '',
    password: '',
    confirmpswd: '',
  });
  //   const [passwordVisible, setPasswordVisible] = React.useState(false);
  //   const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formError, setFormError] = React.useState({
    currentpswd: { status: false, message: '' },
    password: { status: false, message: '' },
    confirmpswd: { status: false, message: '' },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormError((prev) => ({ ...prev, [e.target.id]: false }));
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };
  return (
    <div className="border rounded-2xl p-6">
      <Subtitle text="Change Password" />
      <form>
        <div className="mt-8 flex gap-14">
          <DynamicInput
            onChange={handleInputChange}
            value={form.currentpswd}
            type={'password'}
            placeholder={'Enter current password'}
            InputId={'currentpswd'}
            errorMessage={formError.currentpswd.message}
            error={formError.currentpswd.status}
            hasValue={form.currentpswd !== '' ? true : false}
            name={'currentpswd'}
            label="Current Password"
            className="w-[90%] md:w-full"
            required={true}
          />
          <DynamicInput
            onChange={handleInputChange}
            value={form.password}
            type={'password'}
            placeholder={'Enter new password'}
            InputId={'password'}
            errorMessage={formError.password.message}
            error={formError.password.status}
            hasValue={form.password !== '' ? true : false}
            name={'password'}
            label="New Password"
            className="w-[90%] md:w-full"
            required={true}
          />
          <DynamicInput
            onChange={handleInputChange}
            value={form.confirmpswd}
            type={'password'}
            placeholder={'Enter new password'}
            InputId={'confirmpswd'}
            errorMessage={formError.password.message}
            error={formError.password.status}
            hasValue={form.confirmpswd !== '' ? true : false}
            name={'confirmpswd'}
            label="Confirm Password"
            className="w-[90%] md:w-full"
            required={true}
          />
        </div>
        <Button variant="secondary" className="px-10 mt-12">
          Update
        </Button>
        <p className="mt-4 text-sm w-[85%]">
          Security Note: Protect your account by creating a strong password. Use a combination of uppercase and
          lowercase letters, numbers, and special characters.
        </p>
      </form>
    </div>
  );
};

export default ChangePassword;
