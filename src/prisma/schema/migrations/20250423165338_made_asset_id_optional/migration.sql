-- AlterTable
ALTER TABLE "BlogArticle" ALTER COLUMN "coverId" DROP NOT NULL,
ALTER COLUMN "thumbnailId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "CustomerCompany" ALTER COLUMN "logoId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "CustomerReview" ALTER COLUMN "avatarId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Employee" ALTER COLUMN "avatarId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "avatarId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "coverId" DROP NOT NULL,
ALTER COLUMN "thumbnailId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Service" ALTER COLUMN "coverId" DROP NOT NULL,
ALTER COLUMN "iconId" DROP NOT NULL;
