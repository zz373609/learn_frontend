# js闭包

## 要理解js的闭包，需要理解js的作用域


闭包就是在方程执行后还可以继续进入当时方程的作用域

ex.

```
function a(){
  var c = 100;
  return function b(){
    console.log(c)
  }
}


```
