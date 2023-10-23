import React from 'react';
import SecondaryNavbar from '../components/SecondryNavbar';
import InfoPersonal from '../components/InfoPersonal';
import TechnicalSkills from '../components/TechnicalSkills';
import FilterInfoJob from '../components/filterInfoJob';
import UploadCV from '../components/UploadCV';

const ProfilePage = () => {
  return (
    <>
      <SecondaryNavbar currentPage="profile" />
      <div className="border border-[#3BADCD] rounded-lg p-4" style={{ margin: '60px 200px' }}>
        
        <InfoPersonal/>
        <hr className='m-8'/>
        <TechnicalSkills/>
        <FilterInfoJob/>
        <UploadCV/>
        
        
      </div>
      
    </>
  );
};

export default ProfilePage;
