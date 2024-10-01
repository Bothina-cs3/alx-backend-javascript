export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  // Use the iterator to collect all employee names
  for (const name of reportWithIterator) {
    employeeNames.push(name);
  }

  // Join the names with a pipe separator and return the result
  return employeeNames.join(' | ');
}
