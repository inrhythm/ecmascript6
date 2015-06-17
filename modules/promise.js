var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("success");
  }, 10);
});

promise.then(function (value) {
  console.log(value);
});

var promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("bad request");
  }, 10);
});

promise2.catch(function (value) {
  console.log(value);
});

var promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("success");
  }, 10);
});

promise3.then(function (value) {
  console.log(value);
});

var all = Promise.all([promise, promise3]);

all.then(values => {
  console.log(values);
});
