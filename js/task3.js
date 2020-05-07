const findBestEmployee = function (employees) {
  console.log(employees);
  let searchBestEmployee = 0;
  let bestEmployee;
  for (const employee in employees) {
    if (employees[employee] > searchBestEmployee) {
      searchBestEmployee = employees[employee];
      bestEmployee = employee;
    }
  }
  return bestEmployee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    lorence: 99,
    helen: 1,
  }),
); // lorence
