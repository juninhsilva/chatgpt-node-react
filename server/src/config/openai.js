// This code is for v4 of the openai package: npmjs.com/package/openai
const {Configuration, OpenAIApi} = require ("openai");

module.exports = class openai{
    static configuration(){
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });

        return new OpenAIApi(configuration);
    }

static textCompletion({prompt}){
    return {
            model: "text-davinci-003",
            prompt: `${prompt}`,
            temperature: 2,
            max_tokens: 4096,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
        }
    }
}

const response = await openai.completions.create({
    model: "text-davinci-003",
    prompt: "",
    temperature: 2,
    max_tokens: 4096,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });