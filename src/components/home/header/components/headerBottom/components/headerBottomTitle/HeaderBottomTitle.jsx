import React from 'react';

const HeaderBottomTitle = ({ icon, title, boldness }) => {
  return (
    <h2
      className={`flex items-center gap-2.5 ${
        boldness ? 'bg-glow-green-300 text-white p-3.5' : ''
      }`}
    >
      {icon} <span>{title}</span>
    </h2>
  );
};

export default HeaderBottomTitle;
