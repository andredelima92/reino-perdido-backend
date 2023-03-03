/*
  Warnings:

  - Added the required column `idade` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "idade" INTEGER NOT NULL;
