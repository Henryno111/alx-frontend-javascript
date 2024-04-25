/* eslint-disabled */
export default function createIteratorObject(report) {
  return {
    *[Symbol.iterator]() {
      for (const departmentKey of Object.keys(report)) {
        const department = report[departmentKey];
        for (const employee of department) {
          yield employee;
        }
      }
    }
  };
}

