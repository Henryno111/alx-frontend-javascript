export default function getListStudentIds(studentList) {
  // Check if the input is an array
  if (!Array.isArray(studentList)) {
    return [];
  }

  // Use the map function to extract ids from each object in the array
  return studentList.map((student) => student.id);
}
