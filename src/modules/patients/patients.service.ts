/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { PatientsRepository } from './patients.repository';

@Injectable()
export class PatientsService {
  constructor(private readonly patientsRepository: PatientsRepository) {}

  async create(createPatientDto) {
    return await this.patientsRepository.create(createPatientDto);
  }

  async findAll() {
    return await this.patientsRepository.findAll();
  }

  async findOne(id: string) {
    return await this.patientsRepository.findOne(id);
  }

  async update(id: string, updatePatientDto) {
    return await this.patientsRepository.update(id, updatePatientDto);
  }

  async remove(id: string) {
    return await this.patientsRepository.remove(id);
  }
}
