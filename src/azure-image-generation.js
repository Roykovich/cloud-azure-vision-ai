const { OpenAI } = require('openai');

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

const openai = new OpenAI({apiKey, dangerouslyAllowBrowser: true});
const generateImage = async (prompt) => {
    
    const response = await openai.images.generate({
        model: "dall-e-3",
        prompt,
        n: 1,
        size: "1024x1024"
    }).catch(err => console.log(err))

    const result = response.data
    return result
}  

module.exports = generateImage