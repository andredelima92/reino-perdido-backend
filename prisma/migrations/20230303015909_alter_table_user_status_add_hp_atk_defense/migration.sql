-- AlterTable
ALTER TABLE "usersStatus" ADD COLUMN     "attack" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "defense" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "hp" DECIMAL(6,2) NOT NULL DEFAULT 25;