import React from 'react';
import CoverPhoto from './profile-images';
import ProfileDetail from './profile-form';

const ProfileManagement = () => {
  return (
    <div>
      <CoverPhoto />
      <div className="mt-40 px-20">
        <ProfileDetail />
      </div>
    </div>
  );
};

export default ProfileManagement;
