import { GoogleGenAI } from "@google/genai";
import { languages } from "./languages.js";

const ai = new GoogleGenAI({
  apiKey: "API_KEY",
});

async function main() {
  var frase = "no way mf got packed, ref do something!";
  var i = 24;
  var modo = "informal";
  var language = languages[i];
  var response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents:
      "Traduza esse texto para o " +
      language.name +
      " levando em consideração o fato de a conversa de modo" +
      modo +
      " e além de tudo traduzindo as gírias e expressões idiomáticas relativas ao contexto. Me dê somente uma resposta sem explicações nem textos antes ou depois da resposta: " +
      frase,
  });
  var resposta = response.text;
  console.log(resposta);
}

main();
