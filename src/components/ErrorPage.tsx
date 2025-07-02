import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => (
  <div style={{ textAlign: "center", marginTop: 80 }}>
    <h1>403 - Forbidden</h1>
    <p>You do not have permission to view this page.</p>
    <Link to="/" style={{ color: '#007bff', textDecoration: 'underline', fontSize: 18 }}>
      Go to Login
    </Link>
  </div>
);

export default ErrorPage; 