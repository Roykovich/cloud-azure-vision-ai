const analyzeImage = async (url) => {
    const subscriptionKey = process.env.REACT_APP_AZURE_COMPUTER_VISION_SUBSCRIPTION_KEY;
    const endpoint = process.env.REACT_APP_AZURE_COMPUTER_VISION_ENDPOINT;
    const uriBase = endpoint + "vision/v3.0/analyze";
    const params = {
        "visualFeatures": "Categories,Description,Color",
        "details": "",
        "language": "en"
    };
    const options = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": subscriptionKey
        },
        body: JSON.stringify({url})
    };
    return await fetch(uriBase + "?" + new URLSearchParams(params), options)
        .then(response => response.json())
        .then(json => {
        // console.log(json);
        return json
        })
        .catch(error => {
        console.log(error);
        });
}

// analyzeImage("https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Broadway_and_Times_Square_by_night.jpg/450px-Broadway_and_Times_Square_by_night.jpg")

module.exports = analyzeImage;