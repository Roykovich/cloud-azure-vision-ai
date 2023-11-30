import React from 'react';
import { useState } from 'react';
import AnalyzeImage from './Components/AnalyzeImage'; 
import GenerateImage from './Components/GenerateImage';
import LoadingAnimation from './Components/LoadingAnimation';

import analyzeImage from './azure-image-analysis';
import generateImage from './azure-image-generation';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [imageAnalysis, setImageAnalysis] = useState(null);
  const [imageGeneration, setImageGeneration] = useState(null);
  const [loading, setLoading] = useState(false);


  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleAnalysis = async (event) => {
    event.preventDefault();
    setLoading(true);
    await analyzeImage(inputValue)
    .then(response => {
      setLoading(false)
      setImageAnalysis(response);
    });
  }

  const handleGeneration = async (event) => {
    event.preventDefault();
    setLoading(true);
    await generateImage(inputValue)
    .then(response => {
      setLoading(false)
      setImageGeneration(response);
    });
  }

  return (    
    <div>
      <h1>Computer Vision</h1>
      <form>
        <label>Insert URL or type prompt:</label>
        <input type="text" value={inputValue} onChange={handleChange}/>
        <button onClick={handleAnalysis}>Analyze</button>
        <button onClick={handleGeneration}>Generate</button>
      </form>
      <hr />
      {loading && <LoadingAnimation />}
      {imageAnalysis && <AnalyzeImage json={imageAnalysis} url={inputValue} description={imageAnalysis.description.captions[0].text}/>}
      {imageGeneration && <GenerateImage json={imageGeneration} prompt={inputValue} url={imageGeneration[0].url} description={imageGeneration[0].revised_prompt}/>}
    </div>
  );
}

export default App;
