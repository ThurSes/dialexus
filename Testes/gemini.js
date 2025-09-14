import { GoogleGenAI } from "@google/genai";


async function main() {
  var frase = 'I see you once in a blue moon'
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents:
      "Translate this sentence into portuguese, while also making sure that the meaning of the sentence is maintained, make possible adaptations when necessaries for expressions and idioms in general:" + frase,
  });
  let resposta = response.text;
  console.log(resposta);
}

await main();
