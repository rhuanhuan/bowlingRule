//case1  Scope
// a='h'
// function test() {
//     var a;
//     a = 'hahaha';
//     console.log(a);
//     a = 'ha';
//     console.log(a);
//     function test2() {
//          var a;
//          console.log(a);
//          a ='haha';
//          console.log(a);
//          return a;
//     }
//     test2();
//     console.log(a);
// }
// test();
// console.log(a);

// case2  Scope
// a='h'
// function test() {
//     a = 'hahaha';
//     console.log(a);
//     var a = 'ha';
//     console.log(a);
//     function test2() {
//         console.log(a);
//         var a ='haha';
//         console.log(a);
//         return a;
//     }
//     test2();
//     console.log(a);
// }
// test();
// console.log(a);

// case3 lexical scope
// function scopeChainTest(){
//     var b=10,a=10;
//     chainPlus(a,b);
// }
//
// var a=1,b=2;
// function chainPlus(a,b) {
//     console.log(a*b);
// }
//
// console.log(scopeChainTest())

// case 4 lexical scope
// var oa=3;
//
// function a()
// {
//     var oa = 2;
//     return b();
//     function b()
//     {
//         return function()
//         {
//             return oa;
//         };
//     }
//  }
// console.log(a()());

// case5 the key word 'This'/ return result under widows is different
// var a=10;
// function test(){
//     a=5;
//     console.log(a);
//     console.log(this.a);
//     var a;
//     console.log(this.a);
//     console.log(a);
// }
// test();
//
// new test();

var elems = document.getElementsByTagName('a');

for (var i = 0; i < elems.length; i++) {

    elems[i].addEventListener('click', function (e) {
        e.preventDefault();
        alert('I am link #' + i);
    }, 'false');

}