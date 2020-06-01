// function a() {
//   var c= 100;
//   b()
// }

// function b(){
//   console.log(c)
// }

// a()

var c= 100;
function a() {

  function b(){
    console.log(c)
  }
  b()
}


a()