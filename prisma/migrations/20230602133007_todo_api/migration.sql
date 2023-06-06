-- CreateTable
CREATE TABLE "userModel" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "todoModel" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "description" TEXT NOT NULL,
    "dueDate" TIMESTAMP(3)
);

-- CreateIndex
CREATE UNIQUE INDEX "userModel_id_key" ON "userModel"("id");

-- CreateIndex
CREATE UNIQUE INDEX "userModel_email_key" ON "userModel"("email");

-- CreateIndex
CREATE UNIQUE INDEX "todoModel_id_key" ON "todoModel"("id");
