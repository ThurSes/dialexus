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

// async function traduzir() {
//   const lang = document.getElementById("language").value;
//   const translateLang = document.getElementById("translateLang").value;
//   const frase = document.getElementById("frase").value;
//   const modo = document.getElementById("combobox").value;
//   const span = document.getElementById("span");

//   var promptTraduzir = "";

//   const translateLanguage = languages[translateLang].name;
//   const language = languages[lang].name;

//   if (modo === "informal") {
//     promptTraduzir =
//       "Você é um tradutor especialista em linguagem coloquial.  Sua tarefa é traduzir o seguinte texto do " +
//       language +
//       " para o " +
//       translateLanguage +
//       ".  Mantenha a tradução em um estilo informal, como se fosse uma conversa entre amigos, preservando gírias, expressões populares e tom natural.  Se alguma gíria não tiver equivalente direto no " +
//       translateLanguage +
//       ", adapte para uma expressão equivalente usada nesse idioma. IMPORTANTE: responda SOMENTE com a frase traduzida, sem explicações adicionais. Texto: " +
//       frase;
//   } else if (modo === "formal") {
//     promptTraduzir =
//       "Você é um tradutor profissional altamente qualificado.  Sua tarefa é traduzir o seguinte texto do " +
//       language +
//       " para o " +
//       translateLanguage +
//       ".  Mantenha a tradução em um estilo formal, adequado para documentos oficiais, apresentações acadêmicas ou profissionais.  Adapte expressões idiomáticas e gírias para equivalentes mais cultos no " +
//       translateLanguage +
//       ".IMPORTANTE: responda SOMENTE com a frase traduzida, sem explicações adicionais.  Texto: " +
//       frase;
//   }
//   console.log(modo);
//   console.log(translateLanguage);
//   console.log(language);
//   console.log(promptTraduzir);
//   const response = await fetch(
//     "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyBrFCJ5SRuZhKrp-8aDba19mYVHAtp5qsg",
//     {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         contents: [
//           {
//             parts: [
//               {
//                 text: promptTraduzir,
//               },
//             ],
//           },
//         ],
//       }),
//     }
//   );
//   span.innerHTML = `<span
//     id="respostaGemini"
//     class="font-semibold text-center text-stone-950 m-5 p-2 xl:px-10 bg-cyan-400 rounded-3xl"
//   >
//     Resultado da tradução
//   </span>;`;

//   const data = await response.json();
//   document.getElementById("respostaGemini").textContent =
//     data.candidates[0].content.parts[0].text;
// }
async function traduzir() {
  const lang = document.getElementById("language").value;
  const translateLang = document.getElementById("translateLang").value;
  const frase = document.getElementById("frase").value;
  const modo = document.getElementById("combobox").value;
  const span = document.getElementById("span");
  const loader = document.getElementById("loader");

  var promptTraduzir = "";

  const translateLanguage = languages[translateLang].name;
  const language = languages[lang].name;

  if (modo === "informal") {
    promptTraduzir =
      "Você é um tradutor especialista em linguagem coloquial. Traduza do " +
      language +
      " para o " +
      translateLanguage +
      " de forma natural, como uma conversa entre amigos, mantendo gírias. Se não houver equivalente, adapte. IMPORTANTE: responda SOMENTE com a frase traduzida. Texto: " +
      frase;
  } else if (modo === "formal") {
    promptTraduzir =
      "Você é um tradutor profissional. Traduza do " +
      language +
      " para o " +
      translateLanguage +
      " em tom formal, adequado para contextos oficiais ou acadêmicos. Adapte expressões coloquiais para equivalentes cultos. IMPORTANTE: responda SOMENTE com a frase traduzida. Texto: " +
      frase;
  }

  // Mostra o loader e limpa resposta antiga
  loader.classList.remove("hidden");
  span.innerHTML = "";

  try {
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
                  text: promptTraduzir,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    span.innerHTML = `<span
      id="respostaGemini"
      class="font-semibold text-center text-stone-950 m-5 p-2 xl:px-10 bg-cyan-400 rounded-3xl"
    >
    </span>`;

    document.getElementById("respostaGemini").textContent =
      data.candidates[0].content.parts[0].text;
  } catch (error) {
    span.innerHTML =
      '<span class="text-red-500 font-semibold">Erro ao traduzir. Tente novamente.</span>';
    console.error(error);
  } finally {
    // Esconde o loader sempre no final
    loader.classList.add("hidden");
  }
}
