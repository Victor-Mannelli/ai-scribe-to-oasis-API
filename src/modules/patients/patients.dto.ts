import { IsOptional, IsString, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePatientDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'Full name of the patient',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'MRN123456',
    description: 'Medical Record Number',
  })
  @IsString()
  mrn: string;

  @ApiProperty({
    example: '1980-05-15',
    description: 'Date of birth (YYYY-MM-DD)',
  })
  @IsDateString()
  dateOfBirth: string;

  @ApiProperty({
    example: '2024-06-01',
    description: 'Start of care date (YYYY-MM-DD)',
  })
  @IsDateString()
  startOfCareDate: string;

  @ApiProperty({
    example: '2024-06-10',
    description: 'Visit date (YYYY-MM-DD)',
  })
  @IsDateString()
  visitDate: string;

  @ApiProperty({
    example: 'Physical Therapy',
    description: 'Discipline assigned to the patient',
  })
  @IsString()
  discipline: string;

  @ApiProperty({
    example: 'Jane Smith',
    description: 'Clinician assigned to the patient',
  })
  @IsString()
  clinician: string;

  @ApiProperty({
    example: 'Hospital Referral',
    description: 'Source of referral',
  })
  @IsString()
  referralSource: string;

  @ApiProperty({
    example: 'Dr. Brown',
    description: 'Physician responsible for the patient',
  })
  @IsString()
  physician: string;

  @ApiProperty({
    example: 'Active',
    description: 'Current status of the patient',
  })
  @IsString()
  status: string;

  @ApiProperty({
    example: 'Blue Cross',
    description: 'Primary insurance provider',
  })
  @IsString()
  primaryInsurance: string;
}

export class UpdatePatientDto {
  @ApiProperty({
    example: 'ckv8z1h2g0001qz8f9g1l2k3j',
    description: 'Unique identifier for the patient',
    required: false,
  })
  @IsString()
  @IsOptional()
  id?: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'Full name of the patient',
    required: false,
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    example: 'MRN123456',
    description: 'Medical Record Number',
    required: false,
  })
  @IsString()
  @IsOptional()
  mrn?: string;

  @ApiProperty({
    example: '1980-05-15',
    description: 'Date of birth (YYYY-MM-DD)',
    required: false,
  })
  @IsDateString()
  @IsOptional()
  dateOfBirth?: string;

  @ApiProperty({
    example: '2024-06-01',
    description: 'Start of care date (YYYY-MM-DD)',
    required: false,
  })
  @IsDateString()
  @IsOptional()
  startOfCareDate?: string;

  @ApiProperty({
    example: '2024-06-10',
    description: 'Visit date (YYYY-MM-DD)',
    required: false,
  })
  @IsDateString()
  @IsOptional()
  visitDate?: string;

  @ApiProperty({
    example: 'Physical Therapy',
    description: 'Discipline assigned to the patient',
    required: false,
  })
  @IsString()
  @IsOptional()
  discipline?: string;

  @ApiProperty({
    example: 'Jane Smith',
    description: 'Clinician assigned to the patient',
    required: false,
  })
  @IsString()
  @IsOptional()
  clinician?: string;

  @ApiProperty({
    example: 'Hospital Referral',
    description: 'Source of referral',
    required: false,
  })
  @IsString()
  @IsOptional()
  referralSource?: string;

  @ApiProperty({
    example: 'Dr. Brown',
    description: 'Physician responsible for the patient',
    required: false,
  })
  @IsString()
  @IsOptional()
  physician?: string;

  @ApiProperty({
    example: 'Active',
    description: 'Current status of the patient',
    required: false,
  })
  @IsString()
  @IsOptional()
  status?: string;

  @ApiProperty({
    example: 'Blue Cross',
    description: 'Primary insurance provider',
    required: false,
  })
  @IsString()
  @IsOptional()
  primaryInsurance?: string;
}
