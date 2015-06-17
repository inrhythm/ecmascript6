var fooMap = new Map(),
  employeeData = null,
  keyWes = {first:'wes',last:'reid'},
  keyMayank = {first:'mayank',last:'patel'};

fooMap.set(keyWes, employeeData);
fooMap.set(keyMayank, employeeData);
fooMap.set(1001, {});

console.log(fooMap.has({first:'wes',last:'reid'}));
console.log(fooMap.has(keyWes));
