import { DownloadLink } from '@abakernet/types';
import React, { useEffect, useState } from 'react';
import DownloadButton from './download-button';

const Downloads: React.FC = () => {
      const [dowloads, setResume] = useState<DownloadLink[] | null>(null);
    
      useEffect(() => {
        fetch('http://localhost:9000/api/v1/resume/downloads')
          .then(res => res.json())
          .then(data => setResume(data));
      }, []);

      if (!dowloads) return null;

      return (
        <div className="static-download">
            {dowloads?.map(download =>
                <DownloadButton fileUrl={download.url} buttonText={`Download ${download.type}`}/>
            )}
        </div>
    )
}

export default Downloads;