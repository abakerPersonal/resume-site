// Example: src/components/Resume.js
import React, { useEffect, useState } from 'react';

function Resume() {
  const [resume, setResume] = useState(null);

  useEffect(() => {
    fetch('http://localhost:9000/api/v1/resume') // Your API endpoint
      .then(response => response.json())
      .then(data => setResume(data));
  }, []);

  if (!resume) return <div>Loading...</div>;

  return (
    <div>
        <h2>Professional Summary</h2>
        <p>{resume['summary']}</p>
    </div>
  );
}

export default Resume;