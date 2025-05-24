import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const patient1 = await prisma.patient.create({
    data: {
      name: 'John Doe',
      mrn: 'MRN001',
      dateOfBirth: new Date('1980-01-01'),
      startOfCareDate: new Date('2024-01-01'),
      visitDate: new Date('2024-06-01'),
      discipline: 'Physical Therapy',
      clinician: 'Dr. Smith',
      referralSource: 'Hospital A',
      physician: 'Dr. Adams',
      status: 'Active',
      primaryInsurance: 'Insurance A',
    },
  });

  const patient2 = await prisma.patient.create({
    data: {
      name: 'Jane Smith',
      mrn: 'MRN002',
      dateOfBirth: new Date('1975-05-15'),
      startOfCareDate: new Date('2024-02-10'),
      visitDate: new Date('2024-06-02'),
      discipline: 'Occupational Therapy',
      clinician: 'Dr. Lee',
      referralSource: 'Clinic B',
      physician: 'Dr. Baker',
      status: 'Discharged',
      primaryInsurance: 'Insurance B',
    },
  });

  const patient3 = await prisma.patient.create({
    data: {
      name: 'Alice Johnson',
      mrn: 'MRN003',
      dateOfBirth: new Date('1990-09-20'),
      startOfCareDate: new Date('2024-03-05'),
      visitDate: new Date('2024-06-03'),
      discipline: 'Speech Therapy',
      clinician: 'Dr. Patel',
      referralSource: 'Hospital C',
      physician: 'Dr. Clark',
      status: 'Pending',
      primaryInsurance: 'Insurance C',
    },
  });

  console.log({ patient1, patient2, patient3 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
