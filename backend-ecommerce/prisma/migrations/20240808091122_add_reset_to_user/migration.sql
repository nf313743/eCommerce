-- AlterTable
ALTER TABLE `User` ADD COLUMN `passwordResetCode` VARCHAR(191) NULL,
    ADD COLUMN `passwordResetDate` DATETIME(3) NULL;
