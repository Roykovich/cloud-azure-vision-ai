import React from 'react';

const GenerateImage = ({ url, description, json, prompt}) => {
    // json['prompt'] = prompt
    // delete json['revised_prompt']
    const yeison = {
        prompt: prompt,
        url: url,
    }

    return (
        <div>
            <h1>Image Generation</h1>
            <img src={url} alt="computer vision generation" />
            <p>{description}</p>
            <pre>{JSON.stringify(yeison, null, 2)}</pre>
        </div>
    );
}

export default GenerateImage;