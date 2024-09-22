import React from 'react';

const Header = ({ title }) => (
  <>
    <style>
      {`
        .header {
          background-color: #1d4ed8; /* Blue color */
          color: white;
          padding: 1rem; /* Equivalent to Tailwind's p-4 */
        }
        .header h1 {
          font-size: 1.5rem; /* Equivalent to text-2xl */
          font-weight: bold; /* Equivalent to font-bold */
        }
      `}
    </style>
    <header className="header">
      <h1>{title}</h1>
    </header>
  </>
);

export default Header;
