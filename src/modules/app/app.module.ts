import { PatientsModule } from '../patients/patients.module';
import { NotesModule } from '../notes/notes.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AiModule } from '../ai/ai.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [PatientsModule, NotesModule, AiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
