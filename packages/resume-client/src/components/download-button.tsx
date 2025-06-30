import React from 'react';

type DownloadButtonProps = {
    fileUrl: string,
    buttonText: string
}

const DownloadButton: React.FC<DownloadButtonProps> = ({fileUrl, buttonText}) => (
     <a href={fileUrl}>
        <button type="button">
            <i className="fas fa-file-download"></i> {buttonText}
        </button>
    </a>
);

export default DownloadButton;