

function varTest() {
  var x = 31;
  if (true) {
    var x = 71;  // same variable!
    console.log(x);  // 71
  }
  console.log(x);  // 71
}

function letTest() {
  var x = 31;
  if (true) {
    let x = 71;  // different variable
    console.log(x);  // 71
  }
  console.log(x);  // 31
}

varTest();

console.log('---------------------------------------------------------------------');

letTest();

console.log('---------------------------------------------------------------------');

var arr = [1,2,3,4],
  fns = [];

for (var x of arr) {
  fns.push(function () {
    console.log('var :' + x);
  });
}


fns.forEach(function (fn) {
  fn();
});

fns = [];

for (let x of arr) {
  fns.push(function () {
    console.log('let :' + x);
  });
}


fns.forEach(function (fn) {
  fn();
});
