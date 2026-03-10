import React, { useEffect } from 'react';
import { Heartbeat } from 'lucide-react';

const SmartCare = () => {
  useEffect(() => {
    // Service Worker registration for offline capabilities
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js');
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white bg-opacity-50 shadow-lg rounded-lg p-8 m-4 backdrop-filter backdrop-blur-md">
        <h1 className="text-3xl font-bold text-center mb-4">Welcome to SmartCare</h1>
        <div className="flex items-center justify-center mb-4">
          <Heartbeat color="red" />
          <p className="ml-2 text-lg">Your Health Companion</p>
        </div>
        <p className="text-center mb-4">
          Use our AI agent dashboard to check symptoms and provide you with personalized advice!
        </p>
        <button className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition">
          Start Symptom Checker
        </button>
      </div>
    </div>
  );
};

export default SmartCare;
