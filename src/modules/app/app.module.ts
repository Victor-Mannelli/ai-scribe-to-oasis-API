import { PatientsModule } from '../patients/patients.module';
import { NotesModule } from '../notes/notes.module';
import { SeedModule } from '../seed/seed.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AiModule } from '../ai/ai.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [PatientsModule, NotesModule, AiModule, SeedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
