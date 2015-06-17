function doFoo(){
  this.foo = 10;

  setInterval(() => {
    this.foo++; // |this| properly refers to the person object
    console.log(this.foo);
  }, 1000);
}

var p = new doFoo();
