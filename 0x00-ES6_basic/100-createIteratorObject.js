/* eslint-disable */
export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;

  let departments = Object.keys(allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentEmployeeIndex < allEmployees[departments[currentDepartmentIndex]].length) {
        return {
          value: allEmployees[departments[currentDepartmentIndex]][currentEmployeeIndex++],
          done: false
        };
      } else {
        currentEmployeeIndex = 0;
        currentDepartmentIndex++;
        if (currentDepartmentIndex < departments.length) {
          return this.next();
        } else {
          return {
            done: true
          };
        }
      }
    }
  };
}
