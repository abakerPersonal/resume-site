import React, { useEffect, useState } from 'react';
import './App.css';
import { Resume } from '@abakernet/types'
import HeaderComponent from './components/header';
import SummaryComponent from './components/summary';
import SkillsComponent from './components/skills';
import EducationComponent from './components/education';
import ExperienceComponent from './components/experience';
import Downloads from './components/downloads';
import FooterComponent from './components/footer';
import DarkModeToggleButton from './components/dark-mode-toggle';
import { BASEURL } from './constants';



function App() {
  const [resume, setResume] = useState<Resume | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch(`${BASEURL}/resume`)
      .then(res => res.json())
      .then(data => setResume(data))
      .catch(reason => console.log(reason))
  }, []);

  // Update body class when darkMode changes
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  if (!resume) return <div>Loading...</div>;

  return (
  <div>
    <div className="container">
      <DarkModeToggleButton darkMode={darkMode} onToggle={() => setDarkMode(mode => !mode)} />
      <HeaderComponent headerInfo={resume.header} />
      <Downloads />
      <SummaryComponent summary={resume.summary} />
      <SkillsComponent skills={resume.skills} />
      <ExperienceComponent experience={resume.experience} />
      <EducationComponent education={resume.education } />
    </div>
    <FooterComponent />
  </div>
  );
}

export default App;
