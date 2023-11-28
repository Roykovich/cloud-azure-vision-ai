import React from 'react';
import { useState } from 'react';
import AnalyzeImage from './Components/AnalyzeImage'; 

import analyzeImage from './azure-image-analysis';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [imageAnalysis, setImageAnalysis] = useState(null);
  const [imageGeneration, setImageGeneration] = useState(null);


  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleAnalysis = async (event) => {
    event.preventDefault();
    const result = await analyzeImage(inputValue);
    setImageAnalysis(result);
  }

  return (    
    <div>
      <h1>Computer Vision</h1>
      <form>
        <label>Insert URL or type prompt:</label>
        <input type="text" value={inputValue} onChange={handleChange}/>
        <button onClick={handleAnalysis}>Analyze</button>
        <button>Generate</button>
      </form>
      <hr />
      {imageAnalysis && <AnalyzeImage json={imageAnalysis} url={inputValue} description={imageAnalysis.description.captions[0].text}/>}
    </div>
  );
}

export default App;
