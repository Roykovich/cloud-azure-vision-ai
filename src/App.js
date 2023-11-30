import React from 'react';
import { useState, useEffect } from 'react';

import ImageControl from './Components/ImageControl';

import { isConfigured } from './azure-image-analysis';
import { isConfigured as isConfiguredGeneration } from './azure-image-generation';

function App() {
  const [azureKey, setAzureKey] = useState(false);
  const [openaiKey, setOpenaiKey] = useState(false);

  useEffect(() => {
    setAzureKey(isConfigured());
    setOpenaiKey(isConfiguredGeneration());
  }, []);

  return (    
    <div>
      {azureKey && openaiKey ? <ImageControl /> : <p>key and/or endpoint not configured for cognitive services</p>}
    </div>
  );
}

export default App;
