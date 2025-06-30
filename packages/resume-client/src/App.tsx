import React, { useEffect, useState } from 'react';
import './App.css';
import { Resume } from '@abakernet/types'
import HeaderComponent from './components/header';
import SummaryComponent from './components/summary';
import DownloadButton from './components/download-button';
import SkillsComponent from './components/skills';
import EducationComponent from './components/education';
import ExperienceComponent from './components/experience';
import Downloads from './components/downloads';

const PDF_DOWNLOAD_URL = 'https://drive.google.com/uc?export=download&id=1p-zRkH-TMBeVvdhxLKivZ9ZF6r0DPv4v'
const DOCX_DOWNLOAD_URL = 'https://drive.google.com/uc?export=download&id=1ER7Zt94-ZP7eW5sP1NN7YqaFKwE3B6zt'

function App() {
  const [resume, setResume] = useState<Resume | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch('http://localhost:9000/api/v1/resume')
      .then(res => res.json())
      .then(data => setResume(data));
  }, []);

  // Update body class when darkMode changes
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  if (!resume) return <div>Loading...</div>;

  return (
  <div>
    <div className="container">
      
      <button 
        className="toggle-button"
        onClick={() => setDarkMode(mode => !mode)}
        aria-label="Toggle dark mode"
      > 
        <i 
          id="theme-icon" 
          className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}
        ></i>
      </button>

      <HeaderComponent headerInfo={resume.header} />
      <Downloads />
      <SummaryComponent summary={resume.summary} />
      <SkillsComponent skills={resume.skills} />
      <ExperienceComponent experience={resume.experience} />
      <EducationComponent education={resume.education } />
    
    </div>

    <div className="footer">
      <p>&copy; 2025 Alan Baker | All Rights Reserved</p>
    </div>
  </div>
  );
}

export default App;
