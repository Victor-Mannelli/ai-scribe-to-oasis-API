import { IsOptional, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateNoteDto {
  @ApiProperty({
    example: 'Patient described mild pain in the left knee.',
    description: 'Full transcription of the interaction',
  })
  @IsString()
  interactionTranscription: string;

  @ApiProperty({
    example: 'Patient has mild knee pain, no swelling observed.',
    description: 'Summary of the interaction',
  })
  @IsString()
  interactionSummary: string;

  @ApiProperty({
    example: 1,
    description: 'M1800 assessment value',
  })
  @IsNumber()
  M1800: number;

  @ApiProperty({
    example: 2,
    description: 'M1810 assessment value',
  })
  @IsNumber()
  M1810: number;

  @ApiProperty({
    example: 0,
    description: 'M1820 assessment value',
  })
  @IsNumber()
  M1820: number;

  @ApiProperty({
    example: 3,
    description: 'M1830 assessment value',
  })
  @IsNumber()
  M1830: number;

  @ApiProperty({
    example: 1,
    description: 'M1840 assessment value',
  })
  @IsNumber()
  M1840: number;

  @ApiProperty({
    example: 0,
    description: 'M1845 assessment value',
  })
  @IsNumber()
  M1845: number;

  @ApiProperty({
    example: 2,
    description: 'M1850 assessment value',
  })
  @IsNumber()
  M1850: number;

  @ApiProperty({
    example: 1,
    description: 'M1860 assessment value',
  })
  @IsNumber()
  M1860: number;

  @ApiProperty({
    example: 'ckv8z1h2g0001qz8f9g1l2k3j',
    description: 'Patient ID associated with the note',
    required: false,
  })
  @IsString()
  @IsOptional()
  patientId?: string;
}

export class UpdateNoteDto {
  @ApiProperty({
    example: 'ckv8z1h2g0001qz8f9g1l2k3j',
    description: 'Unique identifier for the note',
    required: false,
  })
  @IsString()
  @IsOptional()
  id?: string;

  @ApiProperty({
    example: 'Patient described mild pain in the left knee.',
    description: 'Full transcription of the interaction',
    required: false,
  })
  @IsString()
  @IsOptional()
  interactionTranscription?: string;

  @ApiProperty({
    example: 'Patient has mild knee pain, no swelling observed.',
    description: 'Summary of the interaction',
    required: false,
  })
  @IsString()
  @IsOptional()
  interactionSummary?: string;

  @ApiProperty({
    example: 1,
    description: 'M1800 assessment value',
    required: false,
  })
  @IsNumber()
  @IsOptional()
  M1800?: number;

  @ApiProperty({
    example: 2,
    description: 'M1810 assessment value',
    required: false,
  })
  @IsNumber()
  @IsOptional()
  M1810?: number;

  @ApiProperty({
    example: 0,
    description: 'M1820 assessment value',
    required: false,
  })
  @IsNumber()
  @IsOptional()
  M1820?: number;

  @ApiProperty({
    example: 3,
    description: 'M1830 assessment value',
    required: false,
  })
  @IsNumber()
  @IsOptional()
  M1830?: number;

  @ApiProperty({
    example: 1,
    description: 'M1840 assessment value',
    required: false,
  })
  @IsNumber()
  @IsOptional()
  M1840?: number;

  @ApiProperty({
    example: 0,
    description: 'M1845 assessment value',
    required: false,
  })
  @IsNumber()
  @IsOptional()
  M1845?: number;

  @ApiProperty({
    example: 2,
    description: 'M1850 assessment value',
    required: false,
  })
  @IsNumber()
  @IsOptional()
  M1850?: number;

  @ApiProperty({
    example: 1,
    description: 'M1860 assessment value',
    required: false,
  })
  @IsNumber()
  @IsOptional()
  M1860?: number;

  @ApiProperty({
    example: 'ckv8z1h2g0001qz8f9g1l2k3j',
    description: 'Patient ID associated with the note',
    required: false,
  })
  @IsString()
  @IsOptional()
  patientId?: string;
}
