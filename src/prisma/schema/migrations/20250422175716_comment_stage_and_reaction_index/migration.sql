/*
  Warnings:

  - A unique constraint covering the columns `[userId,articleId]` on the table `BlogReaction` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "BlogComment" ADD COLUMN     "stage" "ContentStage" NOT NULL DEFAULT 'PUBLISHED';

-- CreateIndex
CREATE UNIQUE INDEX "BlogReaction_userId_articleId_key" ON "BlogReaction"("userId", "articleId");
