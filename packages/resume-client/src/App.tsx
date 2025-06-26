import React, { useEffect, useState } from 'react';
import './App.css';
import { Resume } from '@abakernet/types'
import HeaderComponent from './components/header';
import SummaryComponent from './components/summary';

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
      <SummaryComponent summary={resume.summary} />

    </div>

    <div className="footer">
      <p>&copy; 2025 Alan Baker | All Rights Reserved</p>
    </div>
  </div>
  );
}

export default App;
