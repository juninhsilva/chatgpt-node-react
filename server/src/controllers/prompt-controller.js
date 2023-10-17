const InputPrompt = require("../models/input-prompt");
const openai = require("../config/openai");

module.exports = {
    async sendText(request, response){
        const api = openai.configuration();
        const model = new InputPrompt(request.body)

        try {
            const response = await api.createCompletion(
                openai.textCompletion(model)
            );

            return response.status(200).json({
                success:true,
                data: response.data.choices[0].text
            });
        } catch (error) {
            return response.status(400).json({
                success: false,
                error: error.reponse ? error.response : "There's an issue on the server! "
            });
        }
    }
}