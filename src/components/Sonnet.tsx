import React, { useState, useEffect } from 'react';

const sonnets = [
  "Shall I compare thee to a summer's day?",
  "When in disgrace with fortune and men's eyes",
  "Let me not to the marriage of true minds",
  // Add more sonnets as needed
];

const Sonnet: React.FC = () => {
  const [currentSonnet, setCurrentSonnet] = useState('');

  useEffect(() => {
    const randomSonnet = sonnets[Math.floor(Math.random() * sonnets.length)];
    setCurrentSonnet(randomSonnet);
  }, []);

  return (
    <div className="p-4 border rounded-lg bg-white shadow-md">
      <h2 className="text-xl font-semibold mb-2">Random Sonnet</h2>
      <p className="italic">{currentSonnet}</p>
    </div>
  );
};

export default Sonnet;
