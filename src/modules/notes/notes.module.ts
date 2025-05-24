import { PrismaModule } from '../prisma/prisma.module';
import { NotesController } from './notes.controller';
import { NotesRepository } from './notes.repository';
import { NotesService } from './notes.service';
import { AiModule } from '../ai/ai.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule, AiModule],
  controllers: [NotesController],
  providers: [NotesService, NotesRepository],
})
export class NotesModule {}
