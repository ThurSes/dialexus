import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  
  
  
});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents:
      "Translate this sentence into portuguese, while also making sure that the meaning of the sentence is maintained, make possible adaptations when necessaries for expressions and slang in general: 'My bro got cooked'",
  });
  let resposta = response.text;
  console.log(resposta);
}

await main();
