/*
  Warnings:

  - Made the column `patientId` on table `notes` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "notes" DROP CONSTRAINT "notes_patientId_fkey";

-- AlterTable
ALTER TABLE "notes" ALTER COLUMN "patientId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "notes" ADD CONSTRAINT "notes_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
