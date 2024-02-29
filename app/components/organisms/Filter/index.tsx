import React from "react";
import { FaSearch } from "react-icons/fa";

function Filter() {
  return (
    <div className="relative flex justify-center mt-2"> 
    <label className="relative flex justify-center">
      <span className="sr-only">Search</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-2 z-20">
      <FaSearch style={{marginTop: "12px", marginLeft: "22px"}}/>
      </span>
      
      <input
        className="placeholder:italic placeholder:text-slate-400 flex relative shadow-slate-200  border border-slate-300 rounded-md py-2 px-6 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        style={{ paddingLeft: "70px"}}
        placeholder="Search for a country..."
        type="text"
        name="search"
      />
      
    </label>
    </div>
    
  );
}

export default Filter;
