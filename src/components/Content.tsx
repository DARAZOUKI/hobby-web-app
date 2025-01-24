import React from 'react';
import './Content.css';

// Define the structure of a Hobby
interface Hobby {
  name: string;
  year: number;
  iscompleted: boolean;
}

// Define the structure of the props expected by the Content component.
// The props include an array of hobbies
interface ContentProps {
  hobbies: Hobby[];
}

// Define the structure of the props expected by the Content component.
// The props include an array of hobbies
const Content: React.FC<ContentProps> = ({ hobbies }) => {
  return (
    <section>
      <h2>Hobbies</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>
            <p>Name: {hobby.name}</p>
            <p>Year: {hobby.year}</p>
            <p>Status: {hobby.iscompleted ? 'Completed' : 'Not completed'}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Content;
