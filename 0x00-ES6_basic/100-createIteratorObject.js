export default function createIteratorObject(report) {
    function* iterator() {
      // Assuming report.allEmployees is the object containing department names as keys
      // and arrays of employee names as values.
      for (const department of Object.keys(report.allEmployees)) {
        for (const employee of report.allEmployees[department]) {
          yield employee;
        }
      }
    }
  
    return iterator();
  }
  