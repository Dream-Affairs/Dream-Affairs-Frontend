'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Teammgt from './teammgt';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectTrigger,
  SelectLabel,
  SelectGroup,
  SelectItem,
  SelectContent,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';
import { ImSpinner8 } from 'react-icons/im';

import { Button } from '@/components/ui/button';
import { fetchRoles } from './api/api';
import useAuth from '../auth/(helpers)/useAuth';

const InviteTeam: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [roles, setRoles] = useState<Role[]>([]);
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [roleError, setRoleError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { org } = useAuth() as { userId: string; org: OrgType };

  const organizationId = org.organization_id;

  useEffect(() => {
    if (organizationId) {
      const getRoles = async () => {
        try {
          const fetchedRoles: Role[] = await fetchRoles(organizationId);
          setRoles(fetchedRoles);
        } catch (error: any) {
          console.error('Error fetching roles:', error.message);
        }
      };

      getRoles();
    }
  }, [organizationId]);

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
    if (!e.target.value) {
      setFullNameError('Please fill out this field');
    } else if (e.target.value.trim().length < 2) {
      setFullNameError('Full Name must have at least two letters');
    } else {
      setFullNameError('');
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!e.target.value) {
      setEmailError('Please fill out this field');
    } else if (!isValidEmail(e.target.value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const isValidEmail = (email: string) => {
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRoleChange = (selectedRole: string) => {
    const roleObject = roles.find((role) => role.name === selectedRole);
    if (roleObject) {
      console.log(roleObject.id);
      setSelectedRole(roleObject.id);
      setRoleError('');
    } else {
      console.error('Role not found for the selected role name:', selectedRole);
      console.log('List of roles:', roles);
    }
  };

  // sendinvite button
  const handleInviteClick = async () => {
    let isValid = true;

    if (!fullName) {
      setFullNameError('Please fill out this field');
      isValid = false;
    }

    if (!email) {
      setEmailError('Please fill out this field');
      isValid = false;
    }

    if (!selectedRole) {
      setRoleError('Please choose a role');
      isValid = false;
    }

    if (isValid) {
      setIsSubmitting(true);

      try {
        const roleObject = roles.find((role) => role.id === selectedRole);

        if (roleObject) {
          const postData = {
            name: fullName,
            email: email,
            organization_id: '8599465bf29d4a8d9903b7bf8344508d',
            role_id: roleObject.id,
          };

          try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/invites`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                accept: 'application/json',
              },
              body: JSON.stringify(postData),
            });

            if (response.ok) {
              toast({
                title: 'Invite Sent',
                description: 'Your invitation has been sent successfully.',
              });
              // Log the response body because no email is sent for now
              const responseBody = await response.json();
              console.log('Response body:', responseBody);

              setFullName('');
              setEmail('');
              setSelectedRole('Choose Role');
            } else {
              console.error('Error sending invite:', response.statusText);

              toast({
                title: 'Error',
                description: 'An error occurred while sending the invitation. Please try again.',
              });
            }
          } catch (error: any) {
            console.error('Error sending invite:', error.message);

            toast({
              title: 'Error',
              description: 'An error occurred while sending the invitation. Please try again.',
            });
          }
        } else {
          console.error('Role not found for the selected role id:', selectedRole);

          toast({
            title: 'Error',
            description: 'An error occurred while sending the invitation. Please try again.',
          });
        }
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // cancel btn
  const handleCancel = () => {
    setFullName('');
    setEmail('');
    setSelectedRole('Choose Role');
    setFullNameError('');
    setEmailError('');
    setRoleError('');
  };

  return (
    <>
      <div className="lg:pl-16 mt-2 lg:mt-6">
        <h1 className="text-2xl text-center lg:text-left lg:text-[32px] font-semibold">Invite Team</h1>

        <p className=" lg:w-3/5 px-8 lg:px-0 mt-4 text-base leading-[22.4px] font-normal">
          Transform event planning by inviting family and friends to collaborate seamlessly and create lasting memories
          together.
        </p>
      </div>

      {/* divider */}
      <div className="my-4 border w-full border-border"></div>

      {/* invite team section */}
      <section
        className="mx-6 flex flex-col gap-4 rounded-xl px-5 py-4 lg:px-[40px] lg:py-8 lg:pb-20 border border-border"
        style={{
          backgroundColor: 'white',
          boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1 className="text-2xl font-medium">Invite Team form</h1>

        <div className="flex flex-col items-center justify-center lg:flex-row gap-8">
          {/* full name input */}
          <div className="flex flex-col w-full gap-2">
            <Label htmlFor="fullname">
              Full Name <span className="text-red-600">*</span>
            </Label>
            <Input
              id="fullname"
              type="text"
              placeholder="Full Name"
              errorMessage={fullNameError}
              error={!!fullNameError}
              value={fullName}
              onChange={handleFullNameChange}
            />
          </div>

          {/* email input */}
          <div className="flex w-full flex-col gap-2">
            <Label htmlFor="email">
              Email <span className="text-red-600">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              errorMessage={emailError}
              error={!!emailError}
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          {/* dropdown for roles */}
          <div className="flex w-full gap-2 flex-col relative">
            <Label className="">
              Role <span className="text-red-600">*</span>
            </Label>
            <Select onValueChange={handleRoleChange}>
              <SelectTrigger
                className={`w-full h-[55px] capitalize ${roleError ? 'border-red-500' : ''} ${
                  !roleError ? 'hover:border-primary' : ''
                }`}
              >
                <SelectValue placeholder="Choose Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Choose role</SelectLabel>
                  {roles.map((role) => (
                    <SelectItem key={role.id} value={role.name} className="capitalize">
                      {role.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            {roleError && <span className="text-red-600 mt-1 absolute -bottom-5  text-xs">{roleError}</span>}
          </div>
        </div>

        <div className="flex lg:justify-start mt-4 items-center justify-center sm:w-full gap-6">
          <Button variant="outline" className=" w-32" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="secondary" className=" w-32" onClick={handleInviteClick}>
            {isSubmitting ? <ImSpinner8 className="animate-spin mr-2" /> : null}
            {isSubmitting ? 'Sending...' : 'Send Invite'}
          </Button>
        </div>
      </section>

      {/* team management section */}
      <section
        className="mx-6 my-6 flex flex-col gap-4 rounded-xl px-4 lg:px-[40px] pt-4 pb-6 border border-border"
        style={{
          backgroundColor: 'white',
          boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1 className=" text-2xl font-medium">Team management</h1>

        <Teammgt />
      </section>
    </>
  );
};

export default InviteTeam;

interface Role {
  id: string;
  name: string;
  description: string;
  organization_id: string;
  is_default: boolean;
  created_at: string;
  updated_at: string;
}

interface OrgType {
  organization_id: string;
  organization_member_id: string;
}
