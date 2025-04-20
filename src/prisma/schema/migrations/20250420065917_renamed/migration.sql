/*
  Warnings:

  - You are about to drop the column `account_type` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "AccessType" AS ENUM ('ADMIN', 'USER');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "account_type",
ADD COLUMN     "access_type" "AccessType" NOT NULL DEFAULT 'USER';

-- DropEnum
DROP TYPE "AccountType";
