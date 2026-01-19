-- CreateTable
CREATE TABLE "Lists" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Lists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Items" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "releaseDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ItemsToLists" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ItemsToLists_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Items_title_key" ON "Items"("title");

-- CreateIndex
CREATE INDEX "_ItemsToLists_B_index" ON "_ItemsToLists"("B");

-- AddForeignKey
ALTER TABLE "_ItemsToLists" ADD CONSTRAINT "_ItemsToLists_A_fkey" FOREIGN KEY ("A") REFERENCES "Items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemsToLists" ADD CONSTRAINT "_ItemsToLists_B_fkey" FOREIGN KEY ("B") REFERENCES "Lists"("id") ON DELETE CASCADE ON UPDATE CASCADE;
