import React from 'react';

interface ResetButtonProps {
  onReset: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onReset }) => (
  <button className="reset-button" onClick={onReset}>Reset burger</button>
);

export default ResetButton;
