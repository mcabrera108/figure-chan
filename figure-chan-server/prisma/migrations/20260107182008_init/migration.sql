/*
  Warnings:

  - You are about to drop the column `originId` on the `SeriesEntry` table. All the data in the column will be lost.
  - You are about to drop the `Origin` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `seriesId` to the `SeriesEntry` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SeriesEntry" DROP CONSTRAINT "SeriesEntry_originId_fkey";

-- DropIndex
DROP INDEX "SeriesEntry_originId_key";

-- AlterTable
ALTER TABLE "SeriesEntry" DROP COLUMN "originId",
ADD COLUMN     "seriesId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Origin";

-- CreateTable
CREATE TABLE "Series" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Series_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SeriesEntry" ADD CONSTRAINT "SeriesEntry_seriesId_fkey" FOREIGN KEY ("seriesId") REFERENCES "Series"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
