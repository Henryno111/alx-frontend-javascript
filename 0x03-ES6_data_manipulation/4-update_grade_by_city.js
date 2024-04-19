/* eslint-disabled */
export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const studentsInCity = getListStudents.filter((student) => student.location === city);

  const newGradesMap = new Map(newGrades.map((grade) => [grade.studentId, grade.grade]));

  return studentsInCity.map((student) => ({
    ...student,
    grade: newGradesMap.get(student.id) || 'N/A',
  }));
}
