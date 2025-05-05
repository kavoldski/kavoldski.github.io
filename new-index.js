// Step 1: Install React and ReactDOM
// To use React.js, you need to install React and ReactDOM. You can do this using npm or yarn.
// Example: npm install react react-dom

// Step 2: Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Step 3: Create a React Component
// A React component is a JavaScript function or class that optionally accepts inputs (called "props") and returns a React element that describes how a section of the UI should appear.
function App() {
    return (
        <div>
            <h1>Hello, React!</h1>
            <p>Welcome to learning React.js.</p>
        </div>
    );
}

// Step 4: Render the React Component to the DOM
// ReactDOM.render() is used to render a React component into the DOM.
ReactDOM.render(<App />, document.getElementById('root'));

// Step 5: Set up an HTML file
// Ensure you have an HTML file with a root element where React will render the component.
// Example:
// <div id="root"></div>

// Step 6: Run the React Application
// Use a development server like webpack-dev-server or tools like Vite to serve your React application.