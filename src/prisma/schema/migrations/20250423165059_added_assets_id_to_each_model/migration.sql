/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - Added the required column `coverId` to the `BlogArticle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnailId` to the `BlogArticle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logoId` to the `CustomerCompany` table without a default value. This is not possible if the table is not empty.
  - Added the required column `avatarId` to the `CustomerReview` table without a default value. This is not possible if the table is not empty.
  - Added the required column `avatarId` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coverId` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnailId` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coverId` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iconId` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BlogArticle" ADD COLUMN     "coverId" TEXT NOT NULL,
ADD COLUMN     "thumbnailId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CustomerCompany" ADD COLUMN     "logoId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CustomerReview" ADD COLUMN     "avatarId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "avatarId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "coverId" TEXT NOT NULL,
ADD COLUMN     "thumbnailId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "coverId" TEXT NOT NULL,
ADD COLUMN     "iconId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name";

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "avatarId" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);
