import React from "react";

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h1 className="font-bold text-4xl md:text-5xl text-gray-800">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg text-gray-600 mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default PageHeader;