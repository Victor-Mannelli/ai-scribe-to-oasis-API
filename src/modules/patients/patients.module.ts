import { PatientsController } from './patients.controller';
import { PatientsRepository } from './patients.repository';
import { PrismaModule } from '../prisma/prisma.module';
import { PatientsService } from './patients.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  controllers: [PatientsController],
  providers: [PatientsService, PatientsRepository],
})
export class PatientsModule {}
