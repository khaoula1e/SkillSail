import React from "react";

const UploadCV = () => {
    return (
        <div className="flex flex-col ml-80 ">
            <label className="text-2xl m-2 ">Upload Resume</label>
            <input type="file" className=" w-1/2 h-20 w-full  text-center border border-gray-300 rounded-lg w-64 p-4 border-[#7298E0]" />

        </div>

    );
}

export default UploadCV;

