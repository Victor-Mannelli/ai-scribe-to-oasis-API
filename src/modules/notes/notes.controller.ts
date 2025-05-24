/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { FileInterceptor } from '@nestjs/platform-express';
import { NotesService } from './notes.service';
import { Express } from 'express';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post('text')
  async createWithText(@Body() createNoteDto) {
    return await this.notesService.createWithText(createNoteDto);
  }

  @Post('audio')
  @UseInterceptors(FileInterceptor('file'))
  async createWithAudio(
    @Body() createNoteDto: any,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return await this.notesService.createWithAudio(createNoteDto, file);
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
  async update(@Param('id') id: string, @Body() updateNoteDto) {
    return await this.notesService.update(id, updateNoteDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.notesService.remove(id);
  }
}
