function* idMaker(){
  var index = 0;
  while(index < 3)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined

console.log('---------------------------------------------------------------------');

function *getId(a) {
  let x = a;

  while (true) {
    yield ++x;
  }
}

var it = getId(10);

console.log(it.next());
console.log(it.next());
console.log(it.next());

console.log('---------------------------------------------------------------------');
