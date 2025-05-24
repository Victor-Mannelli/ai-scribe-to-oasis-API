import { PatientsModule } from '../patients/patients.module';
import { NotesModule } from '../notes/notes.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [PatientsModule, NotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
