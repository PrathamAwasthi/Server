const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var a;
var n;
rl.question('Aapka naam kya hai? ', (name) => {a=name;console.log(a);rl.close();});
rl.question("Hello", (d) => {
    n=d;
    console.log(n);
    rl.close();
});





