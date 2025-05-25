import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

@Injectable()
export class SeedService implements OnApplicationBootstrap {
  constructor(private readonly prisma: PrismaService) {}

  async onApplicationBootstrap() {
    try {
      const existingPatients = await this.prisma.patient.findMany();
      if (existingPatients.length === 0) {
        console.log('🌱 Seeding database using CLI script...');
        const { stdout, stderr } = await execAsync(
          'npx ts-node prisma/seed.ts',
        );
        console.log('✅ Seed stdout:', stdout);
        if (stderr) {
          console.error('⚠️ Seed stderr:', stderr);
        }
      }
    } catch (error) {
      console.error('❌ Error running seed script:', error);
    }
  }
}
