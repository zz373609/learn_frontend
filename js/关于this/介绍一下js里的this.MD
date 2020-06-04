## js的this

js的this其实不要理解的太复杂，记住一句话就可以了，谁调用的this就指向谁

一些强行绑定this的方法

call/apply/bind


Function.prototype.call2 = function(context){
  context.fn = this;
  context.fn();
  delete context.fn;
}


Function.prototype.bind2 = function(context){

  let fun = this;

  return function(){
    fun.apply(context)
  }
}