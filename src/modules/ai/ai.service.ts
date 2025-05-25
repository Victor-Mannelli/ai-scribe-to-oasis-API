import { oasisPrompt } from 'src/utils/oasisDataProcessingPrompt';
import { parseAiResponse } from 'src/utils/parseAiResponse';
import { Injectable } from '@nestjs/common';
import { AssemblyAI } from 'assemblyai';
import OpenAI from 'openai';

@Injectable()
export class AiService {
  private openai = new OpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey: process.env.OPENROUTER_API_KEY,
  });
  private assemblyai = new AssemblyAI({
    apiKey: process.env.ASSEMBLYAI_API_KEY,
  });

  //! All Models that can transcript audio to text on OpenAI are paid
  // async transcribeAudioWithOpenAi(audioBuffer: Buffer): Promise<string> {
  //   const completion = await this.openai.chat.completions.create({
  //     model: '',
  //     messages: [
  //       {
  //         role: 'user',
  //         content: [
  //           {
  //             type: 'text',
  //             text: 'Transcribe this audio to text',
  //           },
  //           {
  //             type: 'input_audio',
  //             input_audio: {
  //               data: audioBuffer.toString('base64'),
  //               format: 'wav',
  //             },
  //           },
  //         ],
  //       },
  //     ],
  //   });
  //   console.log('transcribeAudio: ', completion.choices[0].message);
  //   return parseAiResponse(completion.choices[0].message.content);
  // }

  async transcribeAudio(audioBuffer: Buffer): Promise<string> {
    const transcript = await this.assemblyai.transcripts.transcribe({
      audio: audioBuffer,
      speech_model: 'universal',
    });
    return transcript.text;
  }

  async processOasisData(transcript: string) {
    const prompt = oasisPrompt(transcript);

    const completion = await this.openai.chat.completions.create({
      model: 'google/gemma-3-4b-it:free',
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: prompt,
            },
          ],
        },
      ],
    });

    return parseAiResponse(completion.choices[0].message.content);
  }
}
