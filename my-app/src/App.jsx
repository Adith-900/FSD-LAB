// Program 6 : SPA with React + Alert Functionality

// Importing React to use JSX and components
import React from "react";

// App component begins
const App = () => {

  // Function that runs when button is clicked
  const showSuccess = () => {
    alert("✅ Action completed successfully!");
  };

  return (
    // Main container with simple inline styles
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      
      {/* HEADER SECTION */}
      <h1>Welcome to My React SPA</h1>
      {/* Paragraph explaining the app */}
      <p>
        A minimal single-page application built using <strong>React</strong>.
      </p>

      {/* Horizontal line used as separator */}
      <hr />

      {/* CONTENT SECTION */}
      <h2>About This Page</h2>
      {/* Description paragraph */}
      <p>
        This page demonstrates a very simple React setup that works without any
        CSS file. Everything is written inside the <code>App.jsx</code> component.
      </p>

      {/* More details listed in bullets */}
      <p>You can use this example for:</p>
      <ul>
        <li>Personal or portfolio landing pages</li>
        <li>Basic intro or information pages</li>
        <li>Single-page demonstrations for labs or exams</li>
      </ul>

      {/* FUNCTIONALITY SECTION */}
      <h2>Test Functionality</h2>
      <p>Click the button below to display a success popup.</p>

      <button
        onClick={showSuccess}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        Click Me
      </button>

      {/* Another separator */}
      <hr />

      {/* FOOTER SECTION with centered text */}
      <p style={{ textAlign: "center" }}>
        © {new Date().getFullYear()} — Simple React SPA
      </p>
    </div> 
  );
};

// Exporting the component so other files can use it
export default App;
