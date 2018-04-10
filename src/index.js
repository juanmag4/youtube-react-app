import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyBBugn_cfaTnOFBnSuJo8lneek58jCO8hM';
// Create a new component. This component should produce HTML
const App = () => {
    return <div>Hi!!</div>;
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));