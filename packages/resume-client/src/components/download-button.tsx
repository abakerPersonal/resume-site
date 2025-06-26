import React from 'react';

type DownloadButtonProps = {
    fileUrl: string
    fileName: string
    buttonText: string
}

const DownloadButton: React.FC<DownloadButtonProps> = ({fileUrl, fileName, buttonText}) => (
     <a href={fileUrl} download={fileName}>
        <button type="button">
            <i className="fas fa-file-download"></i> {buttonText}
        </button>
    </a>
);

export default DownloadButton;