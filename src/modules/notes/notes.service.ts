/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotesRepository } from './notes.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotesService {
  constructor(private readonly notesRepository: NotesRepository) {}

  async create(createNoteDto) {
    return await this.notesRepository.create(createNoteDto);
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
