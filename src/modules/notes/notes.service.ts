import { CreateNoteDto, UpdateNoteDto } from './notes.dto';
import { NotesRepository } from './notes.repository';
import { AiService } from '../ai/ai.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotesService {
  constructor(
    private readonly notesRepository: NotesRepository,
    private readonly aiService: AiService,
  ) {}

  async createWithText(createNoteDto: CreateNoteDto) {
    return await this.notesRepository.create(createNoteDto);
  }
  async createWithAudio(file: Express.Multer.File, patientId: string) {
    try {
      const transcript = await this.aiService.transcribeAudio(file.buffer);
      const processedData = await this.aiService.processOasisData(transcript);
      const parsedData = {
        interactionTranscription: processedData.transcription,
        interactionSummary: processedData.summary,
        M1800: Number(processedData.fields.M1800),
        M1810: Number(processedData.fields.M1810),
        M1820: Number(processedData.fields.M1820),
        M1830: Number(processedData.fields.M1830),
        M1840: Number(processedData.fields.M1840),
        M1845: Number(processedData.fields.M1845),
        M1850: Number(processedData.fields.M1850),
        M1860: Number(processedData.fields.M1860),
        patientId,
      };

      // Next Step: Save audio at S3 AWS Bucket

      return await this.notesRepository.create(parsedData);
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

  async update(id: string, updateNoteDto: UpdateNoteDto) {
    return await this.notesRepository.update(id, updateNoteDto);
  }

  async remove(id: string) {
    return await this.notesRepository.remove(id);
  }
}
