// src/pages/NotFoundPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>Oops! The page you are looking for doesn't exist.</p>
      <button onClick={handleBackToHome}>Back to Home</button>

      <style jsx>{`
        .not-found-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #111;
          color: #fff;
          text-align: center;
        }
        h1 {
          font-size: 6rem;
          margin: 0;
        }
        p {
          font-size: 1.5rem;
          margin: 1rem 0;
        }
        button {
          padding: 0.75rem 2rem;
          background-color: #4caf50;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
          margin-top: 1rem;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #45a049;
        }
        @media (max-width: 600px) {
          h1 {
            font-size: 4rem;
          }
          p {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;
