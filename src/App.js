import React, { useState } from 'react';
import './App.css';
import BMICalculator from 'bmi-calculator/src/index.js';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div>
            <h1>Welcome to the BMI Calculator App</h1>
            <button onClick={() => setCurrentPage('bmiCalculator')}>Go to BMI Calculator</button>
          </div>
        );
      case 'bmiCalculator':
        return <BMICalculator />;
      default:
        return (
          <div>
            <h1>Page Not Found</h1>
            <button onClick={() => setCurrentPage('home')}>Go Home</button>
          </div>
        );
    }
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li onClick={() => setCurrentPage('home')}>Home</li>
          <li onClick={() => setCurrentPage('bmiCalculator')}>BMI Calculator</li>
          {/* Add more navigation links here if needed */}
        </ul>
      </nav>
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
