/*
  Warnings:

  - You are about to drop the column `departmentId` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `sessionId` on the `ClassroomAttendance` table. All the data in the column will be lost.
  - You are about to drop the column `classroomId` on the `ClassroomQuiz` table. All the data in the column will be lost.
  - You are about to drop the column `classroomId` on the `ClassroomSession` table. All the data in the column will be lost.
  - You are about to drop the column `departmentId` on the `CollageClassroom` table. All the data in the column will be lost.
  - You are about to drop the column `maintainerId` on the `CollageDepartment` table. All the data in the column will be lost.
  - You are about to drop the column `chargeTypeId` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `Faculty` table. All the data in the column will be lost.
  - You are about to drop the column `quizId` on the `QuizAttempts` table. All the data in the column will be lost.
  - You are about to drop the column `quizId` on the `QuizQuestion` table. All the data in the column will be lost.
  - You are about to drop the column `quizId` on the `QuizResult` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `approvedBy` on the `StudentFee` table. All the data in the column will be lost.
  - Added the required column `adminDepartmentId` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `classroomSessionId` to the `ClassroomAttendance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `collageClassroomId` to the `ClassroomQuiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `collageClassroomId` to the `ClassroomSession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `collageDepartmentId` to the `CollageClassroom` table without a default value. This is not possible if the table is not empty.
  - Added the required column `facultyId` to the `CollageDepartment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adminId` to the `Faculty` table without a default value. This is not possible if the table is not empty.
  - Added the required column `classroomQuizId` to the `QuizAttempts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `classroomQuizId` to the `QuizQuestion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `classroomQuizId` to the `QuizResult` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adminId` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adminId` to the `StudentFee` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "ClassroomAttendance" DROP CONSTRAINT "ClassroomAttendance_sessionId_fkey";

-- DropForeignKey
ALTER TABLE "ClassroomQuiz" DROP CONSTRAINT "ClassroomQuiz_classroomId_fkey";

-- DropForeignKey
ALTER TABLE "ClassroomSession" DROP CONSTRAINT "ClassroomSession_classroomId_fkey";

-- DropForeignKey
ALTER TABLE "CollageClassroom" DROP CONSTRAINT "CollageClassroom_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "CollageDepartment" DROP CONSTRAINT "CollageDepartment_maintainerId_fkey";

-- DropForeignKey
ALTER TABLE "Faculty" DROP CONSTRAINT "Faculty_createdBy_fkey";

-- DropForeignKey
ALTER TABLE "QuizAttempts" DROP CONSTRAINT "QuizAttempts_quizId_fkey";

-- DropForeignKey
ALTER TABLE "QuizQuestion" DROP CONSTRAINT "QuizQuestion_quizId_fkey";

-- DropForeignKey
ALTER TABLE "QuizResult" DROP CONSTRAINT "QuizResult_quizId_fkey";

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_createdBy_fkey";

-- DropForeignKey
ALTER TABLE "StudentFee" DROP CONSTRAINT "StudentFee_approvedBy_fkey";

-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "departmentId",
ADD COLUMN     "adminDepartmentId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ClassroomAttendance" DROP COLUMN "sessionId",
ADD COLUMN     "classroomSessionId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ClassroomQuiz" DROP COLUMN "classroomId",
ADD COLUMN     "collageClassroomId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ClassroomSession" DROP COLUMN "classroomId",
ADD COLUMN     "collageClassroomId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "CollageClassroom" DROP COLUMN "departmentId",
ADD COLUMN     "collageDepartmentId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "CollageDepartment" DROP COLUMN "maintainerId",
ADD COLUMN     "facultyId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "chargeTypeId";

-- AlterTable
ALTER TABLE "Faculty" DROP COLUMN "createdBy",
ADD COLUMN     "adminId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "QuizAttempts" DROP COLUMN "quizId",
ADD COLUMN     "classroomQuizId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "QuizQuestion" DROP COLUMN "quizId",
ADD COLUMN     "classroomQuizId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "QuizResult" DROP COLUMN "quizId",
ADD COLUMN     "classroomQuizId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "createdBy",
ADD COLUMN     "adminId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "StudentFee" DROP COLUMN "approvedBy",
ADD COLUMN     "adminId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_adminDepartmentId_fkey" FOREIGN KEY ("adminDepartmentId") REFERENCES "AdminDepartment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Faculty" ADD CONSTRAINT "Faculty_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollageDepartment" ADD CONSTRAINT "CollageDepartment_facultyId_fkey" FOREIGN KEY ("facultyId") REFERENCES "Faculty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollageClassroom" ADD CONSTRAINT "CollageClassroom_collageDepartmentId_fkey" FOREIGN KEY ("collageDepartmentId") REFERENCES "CollageDepartment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassroomSession" ADD CONSTRAINT "ClassroomSession_collageClassroomId_fkey" FOREIGN KEY ("collageClassroomId") REFERENCES "CollageClassroom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassroomAttendance" ADD CONSTRAINT "ClassroomAttendance_classroomSessionId_fkey" FOREIGN KEY ("classroomSessionId") REFERENCES "ClassroomSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassroomQuiz" ADD CONSTRAINT "ClassroomQuiz_collageClassroomId_fkey" FOREIGN KEY ("collageClassroomId") REFERENCES "CollageClassroom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizQuestion" ADD CONSTRAINT "QuizQuestion_classroomQuizId_fkey" FOREIGN KEY ("classroomQuizId") REFERENCES "ClassroomQuiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizAttempts" ADD CONSTRAINT "QuizAttempts_classroomQuizId_fkey" FOREIGN KEY ("classroomQuizId") REFERENCES "ClassroomQuiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizResult" ADD CONSTRAINT "QuizResult_classroomQuizId_fkey" FOREIGN KEY ("classroomQuizId") REFERENCES "ClassroomQuiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentFee" ADD CONSTRAINT "StudentFee_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
