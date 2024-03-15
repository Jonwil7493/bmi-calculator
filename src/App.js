import React, { useState } from 'react';
import './App.css';
import BMICalculator from './BMICalculator';
import Testimonial from './Testimonial'; 

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div>
            <h1>Welcome to the BMI Calculator App</h1>
            <button onClick={() => setCurrentPage('bmiCalculator')}>Go to BMI Calculator</button>
            <Testimonial /> {/* Render the Testimonial component */}
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
        </ul>
      </nav>
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
