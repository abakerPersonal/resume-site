import React, { useEffect, useState } from 'react';
import './App.css';
import { Resume } from '@abakernet/types'
import HeaderComponent from './components/header';
import SummaryComponent from './components/summary';
import DownloadButton from './components/download-button';
import SkillsComponent from './components/skills';

function App() {
  const [resume, setResume] = useState<Resume | null>(null);

  useEffect(() => {
    fetch('http://localhost:9000/api/v1/resume')
      .then(res => res.json())
      .then(data => setResume(data));
  }, []);

  if (!resume) return <div>Loading...</div>;

  return (
  <div>
    <div className="container">

      <button className="toggle-button"> 
        <i id="theme-icon" className="fas fa-moon"></i>
      </button>

      <HeaderComponent headerInfo={resume.header} />

      <div className="static-download">
        <DownloadButton fileName='Alan_Baker_Resume.pdf' fileUrl="/files/Alan_Baker_Resume.pdf" buttonText='Download PDF'/>
        <DownloadButton fileName='Alan_Baker_Resume.docx' fileUrl="/files/Alan_Baker_Resume.docx" buttonText='Download DOCX'/>
      </div>

      <SummaryComponent summary={resume.summary} />
      <SkillsComponent skills={resume.skills} />
    
    </div>

    <div className="footer">
      <p>&copy; 2025 Alan Baker | All Rights Reserved</p>
    </div>
  </div>
  );
}

export default App;
