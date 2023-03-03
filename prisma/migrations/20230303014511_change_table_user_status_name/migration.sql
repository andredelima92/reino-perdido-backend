/*
  Warnings:

  - You are about to drop the `UserStatus` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserStatus" DROP CONSTRAINT "UserStatus_userId_fkey";

-- DropTable
DROP TABLE "UserStatus";

-- CreateTable
CREATE TABLE "usersStatus" (
    "userId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "usersStatus_userId_key" ON "usersStatus"("userId");

-- AddForeignKey
ALTER TABLE "usersStatus" ADD CONSTRAINT "usersStatus_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
