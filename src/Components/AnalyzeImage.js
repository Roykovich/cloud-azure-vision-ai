import React from 'react';

const AnalyzeImage = ({ url, description, json}) => {
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