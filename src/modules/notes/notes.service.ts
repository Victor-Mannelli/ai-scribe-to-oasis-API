/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotesRepository } from './notes.repository';
import { AiService } from '../ai/ai.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotesService {
  constructor(
    private readonly notesRepository: NotesRepository,
    private readonly aiService: AiService,
  ) {}

  async createWithText(createNoteDto) {
    return await this.notesRepository.create(createNoteDto);
  }
  async createWithAudio(createNoteDto, file) {
    try {
      const transcript = await this.aiService.transcribeAudio(file.buffer);
      // const response = await this.aiService.processOasisData(transcript);
      return transcript;
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    return await this.notesRepository.findAll();
  }

  async findOne(id: string) {
    return await this.notesRepository.findOne(id);
  }

  async update(id: string, updateNoteDto) {
    return await this.notesRepository.update(id, updateNoteDto);
  }

  async remove(id: string) {
    return await this.notesRepository.remove(id);
  }
}
