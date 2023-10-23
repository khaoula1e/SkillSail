import React from "react";
import {
  FaBuffer,
  FaWpbeginner,
  FaHome,
  FaPlusCircle,
  FaHashtag,
} from "react-icons/fa";

const SelectOption = ({ id, options }) => (
  <select
    id={id}
    className="border border-gray-400 p-2 w-96 m-5 rounded-lg h-12 "
  >
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);

const Checkbox = ({ id, value, label }) => (
  <div className="border border-gray-400 p-2 w-96 m-5 rounded-lg h-12">
    <input id={id} type="checkbox" value={value} name={id} />
    <label htmlFor={id} className="w-full py-2 ml-2 text-xl">
      {label}
    </label>
  </div>
);

const FilterInfoJob = () => {
  const jobLevels = ["Junior", "Mid-Level", "Senior", "Lead", "Executive"];
  const locationPreferences = [
    "Rabat, Maroc",
    "Casablanca, Maroc",
    "Tanger, Maroc",
    "Marrakech, Maroc",
  ];
  const hashtags = [
    "#webdesigner",
    "#webdevelopment",
    "#business",
    "#technology",
    "#code",
    "#programmer",
    "#UI/UX",
    "#javascript",
    "#Java",
    "#HTML",
    "#Inovation",
    "#SCRUM"
  ];

  return (
    <>
      <div className="flex items-center space-x-10 mt-8 mr-8 mb-8">
        <FaBuffer className="text-2xl text-blue-500 ml-8" />
        <label htmlFor="jobLevel" className="text-2xl">
          JOB LEVEL :
        </label>
        <SelectOption id="jobLevel" options={jobLevels} />
      </div>

      <div className="flex items-center space-x-10 ">
        <FaWpbeginner className="text-2xl text-blue-500 ml-8" />
        <p className="text-2xl">TYPE OF JOB :</p>
      </div>

      <div className="flex items-center space-x-10 ml-20 m-8">
        <Checkbox id="bordered-checkbox-1" value="Remote" label="Remote" />
        <Checkbox id="bordered-checkbox-2" value="On Site" label="On Site" />
      </div>

      <div className="flex items-center space-x-10 ">
        <FaHome className="text-2xl text-blue-500 ml-8" />
        <p className="text-2xl">LOCATION PREFERENCES :</p>
        <FaPlusCircle className="text-[#4e92a5] text-2xl ml-8" />
      </div>

      <div className="flex items-center space-x-10 ml-20 m-8">
        {locationPreferences.map((location, index) => (
          <div
            key={index}
            className="text-center text-xl w-56 border border-gray-400 rounded-lg p-2 m-2"
          >
            {location}
          </div>
        ))}
      </div>

      <div>
        <div className="flex items-center space-x-10 ">
          <FaHashtag className="text-2xl text-blue-500 ml-8" />
          <p className="text-2xl">HASHTAGS :</p>
          <FaPlusCircle className="text-[#4e92a5] text-2xl ml-8" />
        </div>
        <div className="flex flex-wrap ml-20 m-5 space-x-10 ">
          {hashtags.map((hash, index) => (
            <span key={index} className="text-2xl text-[#7298E0] mb-2 ">
              {hash}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default FilterInfoJob;
