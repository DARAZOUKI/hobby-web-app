import React from 'react';
import './Header.css';


interface HeaderProps {
  title: string;
}
// Define the Header component as a React functional component
const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
      <img src="banner.jpg" alt="Banner" style={{ width: '100%' }} />
    </header>
  );
};

export default Header;
