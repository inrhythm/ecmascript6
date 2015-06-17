var a = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryl­lium"
];

var a2 = a.map(function(s){ return s.length });
var a3 = a.map( s => s.length );
a.forEach((item) => console.log(`Element: ${item}`));
