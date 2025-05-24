-- CreateTable
CREATE TABLE "patients" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "mrn" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "startOfCareDate" TIMESTAMP(3) NOT NULL,
    "visitDate" TIMESTAMP(3) NOT NULL,
    "discipline" TEXT NOT NULL,
    "clinician" TEXT NOT NULL,
    "referralSource" TEXT NOT NULL,
    "physician" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "primaryInsurance" TEXT NOT NULL,

    CONSTRAINT "patients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notes" (
    "id" TEXT NOT NULL,
    "interactionTranscription" TEXT NOT NULL,
    "interactionSummary" TEXT NOT NULL,
    "M1800" INTEGER NOT NULL,
    "M1810" INTEGER NOT NULL,
    "M1820" INTEGER NOT NULL,
    "M1830" INTEGER NOT NULL,
    "M1840" INTEGER NOT NULL,
    "M1850" INTEGER NOT NULL,
    "M1860" INTEGER NOT NULL,
    "patientId" TEXT,

    CONSTRAINT "notes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "notes" ADD CONSTRAINT "notes_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patients"("id") ON DELETE SET NULL ON UPDATE CASCADE;
