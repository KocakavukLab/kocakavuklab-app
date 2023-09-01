import React from "react";

const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-blue-500">
      <img
        src="../assets/HomePage_Covers/Boat-Leak-big.png"
        alt="boatleak"
        className="h-auto w-1/2 md:w-1/3 lg:w-1/4"
      />
      <div className="text-center mt-4">
        <h3 className="text-2xl font-semibold">This page could not be found</h3>
      </div>
    </div>
  );
};

export default PageNotFound;
