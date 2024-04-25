
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Henry",
  lastName: "Duke",
  age: 20,
  location: "Lagos"
};

const student2: Student = {
  firstName: "Janet",
  lastName: "Duke",
  age: 22,
  location: "Nairobi"
};

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Render a table using Vanilla JavaScript
const renderTable = (students: Student[]) => {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  students.forEach(student => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
};

// Call the renderTable function with studentsList
renderTable(studentsList);

