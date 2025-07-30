import React from 'react';

type DarkModeToggleButtonProps = {
  darkMode: boolean;
  onToggle: () => void;
};

const DarkModeToggleButton: React.FC<DarkModeToggleButtonProps> = ({ darkMode, onToggle }) => (
  <button
    className="toggle-button"
    onClick={onToggle}
    aria-label="Toggle dark mode"
  >
    <i
      id="theme-icon"
      data-testid="theme-icon"
      className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}
    ></i>
  </button>
);

export default DarkModeToggleButton;