// npm install assemblyai

import { AssemblyAI } from 'assemblyai'

const client = new AssemblyAI({
  apiKey: "85db94e5dffb40faaf4864a5520430d9"
})

const audioUrl =
  'https://assembly.ai/sports_injuries.mp3'

const config = {
  audio_url: audioUrl
}

const run = async () => {
  const transcript = await client.transcripts.transcribe(config)
  console.log(transcript.text)
}

run()