import React from "react";

const NoPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
  <h1>404 - Page Not Found</h1>
  <p>The page you are looking for does not exist.</p>
  
  <a href="/" className="text-blue-500 underline hover:text-blue-800 flex justify-center items-center gap-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4 text-blue-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
      />
    </svg>
    Go Back to Home
  </a>
</div>
  );
};

export default NoPage;
