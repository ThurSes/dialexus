// import { GoogleGenAI } from "@google/genai";
// import { languages } from "./languages.js";

// const ai = new GoogleGenAI({
//   apiKey: "AIzaSyBrFCJ5SRuZhKrp-8aDba19mYVHAtp5qsg",
// });

// async function traduzir() {
//   var frase = document.getElementById("frase").value;
//   var lang = document.getElementById("language").value;
//   var modo = document.getElementById("combobox").value;
//   var language = languages[lang];
//   var response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents:
//       "Traduza esse texto para o " +
//       language.name +
//       " levando em consideração o fato de a conversa de modo" +
//       modo +
//       " e além de tudo traduzindo as gírias e expressões idiomáticas relativas ao contexto. Me dê somente uma resposta sem explicações nem textos antes ou depois da resposta: " +
//       frase,
//   });
//   var resposta = response.text;
//   console.log(resposta);
//   document.getElementById("respostaGemini").textContent = response.text;
// }
const languages = [
  //0
  {
    no: "1",
    name: "Inglês",
    native: "English",
    code: "en",
  },
  //1
  {
    no: "2",
    name: "Árabe",
    native: "عربي",
    code: "ar",
  },
  //2
  {
    no: "3",
    name: "Catalão",
    native: "Català",
    code: "ca",
  },
  //3
  {
    no: "4",
    name: "Chinês (Simplificado)",
    native: "中文简体",
    code: "zh-CN",
  },
  //4
  {
    no: "5",
    name: "Chinês (Tradicional)",
    native: "中文繁體",
    code: "zh-TW",
  },
  //5
  {
    no: "6",
    name: "Croata",
    native: "Hrvatski",
    code: "hr",
  },
  //6
  {
    no: "7",
    name: "Tcheco",
    native: "Čeština",
    code: "cs",
  },
  //7
  {
    no: "8",
    name: "Dinamarquês",
    native: "Dansk",
    code: "da",
  },
  //8
  {
    no: "9",
    name: "Holandês",
    native: "Nederlands",
    code: "nl",
  },
  //9
  {
    no: "10",
    name: "Finlandês",
    native: "Suomi",
    code: "fi",
  },
  //10
  {
    no: "11",
    name: "Francês",
    native: "Français",
    code: "fr",
  },
  //11
  {
    no: "12",
    name: "Georgiano",
    native: "ქართული",
    code: "ka",
  },
  //12
  {
    no: "13",
    name: "Alemão",
    native: "Deutsch",
    code: "de",
  },
  //13
  {
    no: "14",
    name: "Grego",
    native: "Ελληνικά",
    code: "el",
  },
  //14
  {
    no: "15",
    name: "Criolo Haitiano",
    native: "Kreyòl ayisyen",
    code: "ht",
  },
  //15
  {
    no: "16",
    name: "Hebreu",
    native: "עברית",
    code: "iw",
  },
  //16
  {
    no: "17",
    name: "Hindi",
    native: "हिन्दी",
    code: "hi",
  },
  //17
  {
    no: "18",
    name: "Irlandês",
    native: "Gaeilge",
    code: "ga",
  },
  //18
  {
    no: "19",
    name: "Italiano",
    native: "Italiano",
    code: "it",
  },
  //19
  {
    no: "20",
    name: "Japonês",
    native: "日本語",
    code: "ja",
  },
  //20
  {
    no: "21",
    name: "Coreano",
    native: "한국어",
    code: "ko",
  },
  //21
  {
    no: "22",
    name: "Norueguês",
    native: "Norsk",
    code: "no",
  },
  //22
  {
    no: "23",
    name: "Persa",
    native: "فارسی",
    code: "fa",
  },
  //23
  {
    no: "24",
    name: "Polonês",
    native: "Polski",
    code: "pl",
  },
  //24
  {
    no: "25",
    name: "Portguês Brasileiro",
    native: "Português",
    code: "pt",
  },
  //25
  {
    no: "26",
    name: "Russo",
    native: "Русский",
    code: "ru",
  },
  //26
  {
    no: "27",
    name: "Sérvio",
    native: "Српски",
    code: "sr",
  },
  //27
  {
    no: "28",
    name: "Eslovaco",
    native: "Slovenčina",
    code: "sk",
  },
  //28
  {
    no: "29",
    name: "Esloveno",
    native: "Slovensko",
    code: "sl",
  },
  //29
  {
    no: "30",
    name: "Espanhol",
    native: "Español",
    code: "es",
  },
  //30
  {
    no: "31",
    name: "Sueco",
    native: "Svenska",
    code: "sv",
  },
  //31
  {
    no: "32",
    name: "Thaiandês",
    native: "ไทย",
    code: "th",
  },
  //32
  {
    no: "33",
    name: "Turco",
    native: "Türkçe",
    code: "tr",
  },
  //33
  {
    no: "34",
    name: "Ucraniano",
    native: "Українська",
    code: "uk",
  },
];

async function traduzir() {
  const frase = document.getElementById("frase").value;
  const lang = document.getElementById("language").value;
  const modo = document.getElementById("combobox").value;

  const language = languages[lang];

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyBrFCJ5SRuZhKrp-8aDba19mYVHAtp5qsg",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text:
                  "Traduza esse texto para o " +
                  language.name +
                  " levando em consideração o fato de a conversa de modo" +
                  modo +
                  " e além de tudo adaptando as gírias e expressões idiomáticas, mantendo o significado original, se possível. Me dê somente uma resposta, a melhor, sem explicações nem textos antes ou depois da resposta: " +
                  frase,
              },
            ],
          },
        ],
      }),
    }
  );

  const data = await response.json();
  document.getElementById("respostaGemini").textContent =
    data.candidates[0].content.parts[0].text;
}
