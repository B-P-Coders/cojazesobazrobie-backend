-- CreateEnum
CREATE TYPE "study_level" AS ENUM ('jednolite magisterskie', 'drugiego stopnia', 'pierwszego stopnia');

-- CreateEnum
CREATE TYPE "study_profile" AS ENUM ('praktyczny', 'ogólnoakademicki');

-- CreateEnum
CREATE TYPE "study_status" AS ENUM ('wygaszane', 'zlikwidowane', 'prowadzone');

-- CreateEnum
CREATE TYPE "title" AS ENUM ('licencjat', 'inżynier', 'magister', 'magister inżynier');

-- CreateTable
CREATE TABLE "cooperators" (
    "cooperator_id" VARCHAR(255),
    "cooperator_name" VARCHAR(255),
    "is_abroad_cooperator" BOOLEAN,
    "id" SERIAL NOT NULL,

    CONSTRAINT "cooperators_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "institutions" (
    "institution" VARCHAR(255),
    "id" SERIAL NOT NULL,

    CONSTRAINT "institutions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "isced" (
    "isced_id" INTEGER,
    "isced_name" VARCHAR(255),
    "id" SERIAL NOT NULL,

    CONSTRAINT "isced_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "languages" (
    "language" VARCHAR(255),
    "id" SERIAL NOT NULL,

    CONSTRAINT "languages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "run_names" (
    "run_name" VARCHAR(255),
    "id" SERIAL NOT NULL,

    CONSTRAINT "run_names_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "studies" (
    "id" SERIAL NOT NULL,
    "name_id" INTEGER,
    "institution_id" INTEGER,
    "level" "study_level",
    "profile" "study_profile",
    "isced_id" INTEGER,
    "create_date" DATE,
    "is_for_teacher" BOOLEAN,
    "language_list" VARCHAR(2000),
    "is_shared" BOOLEAN,
    "status" "study_status",
    "expire_date" VARCHAR(255),
    "del_date" VARCHAR(255),
    "trades" VARCHAR(2000),
    "cooperator_id" INTEGER,
    "cooperation_start_date" DATE,
    "cooperation_end_date" DATE,
    "run_name_id" INTEGER,
    "run_form" VARCHAR(255),
    "lang_id" INTEGER,
    "run_date" DATE,
    "semester_count" INTEGER,
    "ects_count" INTEGER,
    "is_dual" BOOLEAN,
    "run_status" "study_status",
    "is_work_cooperation" BOOLEAN,
    "run_title" "title",

    CONSTRAINT "studies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "study_names" (
    "name" VARCHAR(255),
    "id" SERIAL NOT NULL,

    CONSTRAINT "study_names_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cooperators_unique_id" ON "cooperators"("id");

-- CreateIndex
CREATE UNIQUE INDEX "institutions_unique_id" ON "institutions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "isced_unique_id" ON "isced"("id");

-- CreateIndex
CREATE UNIQUE INDEX "languages_unique_id" ON "languages"("id");

-- CreateIndex
CREATE UNIQUE INDEX "run_names_unique_id" ON "run_names"("id");

-- CreateIndex
CREATE UNIQUE INDEX "study_names_unique_id" ON "study_names"("id");

-- AddForeignKey
ALTER TABLE "studies" ADD CONSTRAINT "studies_cooperator_id_fkey" FOREIGN KEY ("cooperator_id") REFERENCES "cooperators"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "studies" ADD CONSTRAINT "studies_institution_id_fkey" FOREIGN KEY ("institution_id") REFERENCES "institutions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "studies" ADD CONSTRAINT "studies_isced_id_fkey" FOREIGN KEY ("isced_id") REFERENCES "isced"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "studies" ADD CONSTRAINT "studies_lang_id_fkey" FOREIGN KEY ("lang_id") REFERENCES "languages"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "studies" ADD CONSTRAINT "studies_name_id_fkey" FOREIGN KEY ("name_id") REFERENCES "study_names"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "studies" ADD CONSTRAINT "studies_run_name_id_fkey" FOREIGN KEY ("run_name_id") REFERENCES "run_names"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
