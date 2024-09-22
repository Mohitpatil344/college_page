import React from 'react';

const Footer = () => (
  <>
    <style>
      {`
        .footer {
          background-color: #1d4ed8; /* Blue color */
          color: white;
          padding: 1rem; /* Equivalent to Tailwind's p-4 */
          margin-top: 2rem; /* Equivalent to Tailwind's mt-8 */
          text-align: center; /* Optional for centering text */
        }
      `}
    </style>
    <footer className="footer">
      <p>&copy; 2024 Northen University. All rights reserved.</p>
    </footer>
  </>
);

export default Footer;
