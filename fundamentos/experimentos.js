let a = 3

global.b = 123
this.c = 456

console.log(a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);

//criando uma variavel maluca: sem var e sem let
abc = 3 // nao façam isso!!
console.log(global.abc);

//module.exports = { e: 456, f: false, g: 'teste' }