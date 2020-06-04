// -----------------------

// function a() {
//   var c= 100;
//   b()
// }

// function b(){
//   console.log(c)
// }

// a()

// -----------------------

// var c= 100;
// function a() {

//   function b(){
//     console.log(c)
//   }
//   b()
// }


// a()


// -----------------------

// function a(){
//   var c = 100;
//   return function b(){
//     console.log(c)
//   }
// }
// var h = a()
// console.log(h())


// -----------------

// function n(){
//   console.log(this())
// }
// n()

// console.log(Function)

Function.prototype.call2 = function(context){
  //获取调用call2的函数，用this
  context.fn = this;
  context.fn();
  delete context.fn;

}
// 测试一下
var foo = {
    value: 1
};

function bar() {
    console.log(this.value);
}

bar.call2(foo); // 1