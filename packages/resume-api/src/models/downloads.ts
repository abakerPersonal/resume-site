import { DownloadLink } from "@abakernet/types";

const PDFDownload: DownloadLink = {
    type: 'PDF',
    url: 'https://drive.google.com/uc?export=download&id=1p-zRkH-TMBeVvdhxLKivZ9ZF6r0DPv4v'
}

const DOCXDownload: DownloadLink = {
    type: 'DOCX',
    url:  'https://drive.google.com/uc?export=download&id=1ER7Zt94-ZP7eW5sP1NN7YqaFKwE3B6zt'
}

export const downloads = [PDFDownload, DOCXDownload]