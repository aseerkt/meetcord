-- CreateTable
CREATE TABLE "GuestUser" (
    "id" UUID NOT NULL,
    "username" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GuestRoom" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GuestMessage" (
    "id" UUID NOT NULL,
    "username" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "roomId" UUID NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GuestMessage" ADD FOREIGN KEY ("roomId") REFERENCES "GuestRoom"("id") ON DELETE CASCADE ON UPDATE CASCADE;
