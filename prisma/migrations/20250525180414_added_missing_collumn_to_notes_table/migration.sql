/*
  Warnings:

  - Added the required column `M1845` to the `notes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "notes" ADD COLUMN     "M1845" INTEGER NOT NULL;
