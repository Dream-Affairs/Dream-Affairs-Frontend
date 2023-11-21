import React from 'react';
import CoverPhoto from './profile-images';
import ProfileDetail from './profile-form';
import Subtitle from './subtitle';

const ProfileManagement = () => {
  return (
    <div>
      <CoverPhoto />
      <div className="mt-20 sm:mt-28 md:mt-40 px-5 pe-7 md:pe-20 md:px-16">
        <ProfileDetail />
      </div>
    </div>
  );
};

export default ProfileManagement;
