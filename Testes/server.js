import express from "express";
import { WebSocketServer } from "ws";
import { spawn } from "child_process";
import { createSpeechmaticsJWT } from "@speechmatics/auth";
import { RealtimeClient } from "@speechmatics/real-time-client";
import OpenAI from "openai";

const app = express();
const port = 3000;

const speechmaticsApiKey = "SUA_CHAVE_SPEECHMATICS";
const openaiApiKey = "SUA_CHAVE_OPENAI";
const streamURL = "https://media-ice.musicradio.com/LBCUKMP3";

const openai = new OpenAI({ apiKey: openaiApiKey });

// Serve o HTML
app.use(express.static("public"));

const server = app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

// WebSocket
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("Cliente conectado ao WS");
});

// Função pra traduzir com gírias
async function translateWithSlang(text) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "Traduza do inglês para português brasileiro com gírias e naturalidade.",
      },
      { role: "user", content: text },
    ],
  });
  return response.choices[0].message.content;
}

async function transcribeAndTranslate() {
  const client = new RealtimeClient();

  client.addEventListener("receiveMessage", async ({ data }) => {
    if (data.message === "AddTranscript") {
      for (const result of data.results) {
        if (result.is_eos) {
          const original = result.alternatives?.[0].content || "";
          console.log("Inglês:", original);

          const traduzido = await translateWithSlang(original);
          console.log("PT-BR:", traduzido);

          // envia para todos os clientes conectados
          wss.clients.forEach((client) => {
            if (client.readyState === client.OPEN) {
              client.send(traduzido);
            }
          });
        }
      }
    } else if (data.message === "Error") {
      console.error("Erro Speechmatics:", data);
    }
  });

  const jwt = await createSpeechmaticsJWT({
    type: "rt",
    apiKey: speechmaticsApiKey,
    ttl: 60,
  });

  await client.start(jwt, {
    url: "wss://eu2.rt.speechmatics.com/v2",
    transcription_config: {
      language: "en",
      operating_point: "enhanced",
      max_delay: 1.0,
    },
  });

  const ffmpeg = spawn("ffmpeg", [
    "-i",
    streamURL,
    "-ar",
    "16000",
    "-ac",
    "1",
    "-f",
    "s16le",
    "pipe:1",
  ]);

  ffmpeg.stdout.on("data", (chunk) => {
    client.sendAudio(chunk);
  });

  ffmpeg.on("close", () => {
    client.endOfStream();
  });
}

// Inicia a transcrição
transcribeAndTranslate();
