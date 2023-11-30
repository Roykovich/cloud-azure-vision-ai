
const isConfigured = () => {
    if (!process.env.REACT_APP_AZURE_COMPUTER_VISION_SUBSCRIPTION_KEY || !process.env.REACT_APP_AZURE_COMPUTER_VISION_ENDPOINT) {
        console.log("Make sure to set your AZURE_COMPUTER_VISION_SUBSCRIPTION_KEY and AZURE_COMPUTER_VISION_ENDPOINT environment variables.");
        return false;
    } else {
        return true;
    }
}

const SUBSCRIPTION_KEY = process.env.REACT_APP_AZURE_COMPUTER_VISION_SUBSCRIPTION_KEY;
const ENDPOINT = process.env.REACT_APP_AZURE_COMPUTER_VISION_ENDPOINT;

const analyzeImage = async (url) => {
    const uriBase = ENDPOINT + "vision/v3.0/analyze";
    const params = {
        "visualFeatures": "Categories,Description,Color",
        "details": "",
        "language": "en"
    };
    const options = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": SUBSCRIPTION_KEY
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

analyzeImage("https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Broadway_and_Times_Square_by_night.jpg/450px-Broadway_and_Times_Square_by_night.jpg")

module.exports = {analyzeImage, isConfigured};