import React from 'react';
import GeneralLayout from './layout/GeneralLayout/GeneralLayout';
import logo from './logo.svg';
import GroupOfSkills from './shared/GroupOfSkills/GroupOfSkills';
import HeroSection from './shared/HeroSection/HeroSection';

function App() {

  const skills = [
    {
      title:'Html',
      yearsOfExp:3,
    },
    {
      title:'Css',
      yearsOfExp:3,
    },
    {
      title:'Javascript',
      yearsOfExp:3,
    },
    {
      title:'React',
      yearsOfExp:2,
    },
    {
      title:'Python',
      yearsOfExp:3,
    },
    {
      title:'Django',
      yearsOfExp:2,
    }
  ]
  return (
    <GeneralLayout>

      <HeroSection/>
      <GroupOfSkills  skills={skills}/>
    </GeneralLayout>
  );
}

export default App;
