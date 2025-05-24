/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NotesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createNotesDto) {
    return await this.prisma.note.create({
      data: createNotesDto,
    });
  }

  async findAll() {
    return await this.prisma.note.findMany({});
  }

  async findOne(id: string) {
    return await this.prisma.note.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateNotesDto) {
    return await this.prisma.note.update({
      where: {
        id,
      },
      data: updateNotesDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.note.delete({
      where: {
        id,
      },
    });
  }
}
