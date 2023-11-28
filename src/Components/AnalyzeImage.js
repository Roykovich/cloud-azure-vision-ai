// Create a React component calle AnaluzeImage.js

import React from 'react';

// Create a function called AnalyzeImage
const AnalyzeImage = ({ url, description, json}) => {
    console.log('yo ocurro?')
    return (
        <div>
            <h1>Computer Vision Analysis</h1>
            <img src={url} alt="computer vision analysis" />
            <p>{description}</p>
            <pre>{JSON.stringify(json, null, 2)}</pre>
        </div>
    );
}

export default AnalyzeImage;