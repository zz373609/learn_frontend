# js的执行上下文

## 理解js的执行上下文其实就了解js是如何执行的

### 简单的看一段代码

```
  function a(){
    b()
  }
  function b(){
    console.log('test')
  }
  a()
```

gloable
-----------------------------
a()
    ---------------------
    b()
      -----------------
        console.log()
      -----------------

    ---------------------

-----------------------------

首先在执行的时候会创建一个全局的执行环境然后在调用每个方程的时候又创建每一个方程的执行环境，js执行上下文又称为ETC(Execution Context Stack).Stack是什么，就先进后出的一种数据结构，先进来的反而后执行，这里最先进来的是gloable，所以最后执行的是gloable，最后进来的是console，所以最早执行的是console


