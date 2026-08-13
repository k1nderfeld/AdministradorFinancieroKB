-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "rut" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profilePicture" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_rut_key" ON "User"("rut");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
