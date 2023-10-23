import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const TechnicalSkills = () => {
    const skills = ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Java', 'Python', 'HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Java', 'Python', 'HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Java', 'Python', 'HTML5'];

    return (
        <div className="flex flex-col items-start">
            <div className="flex items-center mb-8">
                <h1 className="text-4e92a5 text-2xl font-bold">Technical Skills :</h1>
                <FaPlusCircle className="text-[#4e92a5] text-2xl ml-8" />
            </div>
            <ul className="flex flex-wrap">
                {skills.map((skill, index) => (
                    <li
                        key={index}
                        className="text-center text-white text-xl bg-[#B4C7DF] w-28 border border-B4C7DF rounded-lg p-2 m-2"
                       
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TechnicalSkills;
