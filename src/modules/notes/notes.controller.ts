import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Controller,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CreateNoteDto, UpdateNoteDto } from './notes.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { NotesService } from './notes.service';
import { Express } from 'express';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post('text')
  async createWithText(@Body() createNoteDto: CreateNoteDto) {
    return await this.notesService.createWithText(createNoteDto);
  }

  @Post('audio')
  @UseInterceptors(FileInterceptor('file'))
  async createWithAudio(
    @UploadedFile() file: Express.Multer.File,
    @Body('patientId') patientId: string,
  ) {
    return await this.notesService.createWithAudio(file, patientId);
  }

  @Get()
  async findAll() {
    return await this.notesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.notesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return await this.notesService.update(id, updateNoteDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.notesService.remove(id);
  }
}
