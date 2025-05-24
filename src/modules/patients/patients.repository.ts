/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PatientsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPatientDto) {
    return await this.prisma.patient.create({
      data: createPatientDto,
    });
  }

  async findAll() {
    return await this.prisma.patient.findMany({});
  }

  async findOne(id: string) {
    return await this.prisma.patient.findUnique({
      where: {
        id,
      },
      include: {
        note: true,
      },
    });
  }

  async update(id: string, updatePatientDto) {
    return await this.prisma.patient.update({
      where: {
        id,
      },
      data: updatePatientDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.patient.delete({
      where: {
        id,
      },
    });
  }
}
