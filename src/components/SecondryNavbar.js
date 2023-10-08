import React from 'react';

const SecondaryNavbar = ({currentPage}) => {
    let displayText;
    if(currentPage == 'profile'){
        displayText= 'Profile'
    }
    else if(currentPage =='home'){
        displayText='Home'
    }else if(currentPage=='jobs-details'){
        displayText='Job Details'
    }else{
        displayText='SkillSail'
    }
  return (
    <div className="flex bg-[#E2E4E7] h-20 w-full">
      <div className="flex-1 flex items-center justify-center">
        <span className="text-center text-xl">SkillSail</span>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <span className="text-center text-xl text-[#767F8C]">{displayText}</span>
      </div>
    </div>
  );
};

export default SecondaryNavbar;
