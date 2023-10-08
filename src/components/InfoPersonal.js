import React from 'react';
import imageProfile from '../assets/images/Profile-Image.png';
import { FaEnvelope, FaBriefcase, FaEdit } from 'react-icons/fa';

const InfoPersonal = () => {
  const items = [
    { title: 'Jyles Uniss', isName: true },
    { icon: <FaEnvelope className="text-3xl text-[#B4C7DF] m-2" />, title: 'Mohamedelhajjami1816@gmail.com' },
    { icon: <FaBriefcase className="text-3xl text-[#B4C7DF] m-2" />, title: 'Web Developer' },
  ];

  return (
    <div className="flex items-center justify-center " style={{fontFamily: 'Inria Serif, serif'}  }>
      <img src={imageProfile} alt="Profile picture of Jyles Uniss" className="mr-4" />
      <div className="ml-4 mt-[-20px]">
        <ul className="list-none">
          {items.map((item, index) => (
            <li key={index} className="flex items-center mb-2">
              {item.icon && <span className="mr-2">{item.icon}</span>}
              <span className={item.isName ? 'text-4xl ml-[160px]' : 'text-2xl'}>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="ml-[200px] mt-[-80px]">
        <FaEdit className="text-4xl text-[#4E92A5] m-2" />
      </div>
    </div>
  );
};

export default InfoPersonal;