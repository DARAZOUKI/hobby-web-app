import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';


// Define the main App component as a React functional component.
const App = () => {
  // Define an array of hobbies
  const hobbies = [
    { name: 'Reading', year: 2024, iscompleted: true },
    { name: 'Cycling', year: 2025, iscompleted: false },
    { name: 'swimming', year: 2023, iscompleted: true }
  ];
// The component renders the Header, Content, and Footer components.
  return (
    <div>
      <Header title="My Hobbies" />
      <Content hobbies={hobbies} />
      <Footer />
    </div>
  );
};

export default App;
