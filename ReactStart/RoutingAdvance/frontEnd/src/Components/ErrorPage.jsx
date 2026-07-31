import React from 'react';
import { useLocation } from 'react-router-dom';

const ErrorPage = () => {
  const location = useLocation();

  return (
    <div className="text-center">
      <h1>404 Not Found</h1>
      <p>Could not find resource at {location.pathname}</p>
    </div>
  );
};

export default ErrorPage;
