import { Header } from '@abakernet/types';
import React from 'react';

type HeaderProps = {
  headerInfo: Header;
};

const HeaderComponent: React.FC<HeaderProps> = ({ headerInfo }) => (
  <header className="page-header">
        <div className="header-left">
          <h1>{headerInfo.name}</h1>
          <p className="subtitle">{headerInfo.title}</p>
        </div>
        <div className="header-right">
            <p><i className="fas fa-envelope"></i> <a href={`mailto:${headerInfo.email}`}>{headerInfo.email}</a></p>
            <p><i className="fab fa-linkedin"></i> <a href={`https://www.${headerInfo.linkedInUrl}`} target="_blank">{headerInfo.linkedInUrl}</a></p>
            <p><i className="fas fa-map-marker-alt"></i> {headerInfo.location}</p>
          </div>
    </header>
);

export default HeaderComponent;