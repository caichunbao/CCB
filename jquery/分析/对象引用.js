(function() {
  // 字符串，数字等是赋值的关系
  var a = 5;
  var b = a;
  b += 3;
  console.log(b) // 8
  console.log(a) // 5

  // 对象和函数都是引用的关系
  var c = [1, 2, 3];
  var d = c;
  d.push(4);
  console.log(d) // [1,2,3,4]
  console.log(c); // [1,2,3,4]

  var e = [1, 2, 3]; // e在内存创建了一个空间
  var f = e;
  f = [1, 2, 3, 4]; // f又在内存创建了一个空间
  console.log(f);
  console.log(e);


  // var obj = {
  //   a: 10
  // };
  // var obj1 = obj
  // obj1.a = 20;
  // console.log(obj.a)  // 20

  var obj = {
    a: { b: 10 }
  };

  function copy(obj) { // 浅拷贝
    var newObj = {};

    for (var attr in obj) {
      newObj[attr] = obj[attr]
    }

    return newObj;

  }

  function deepCopy(obj) { // 深拷贝

    if (typeof obj != "object") {
      console.log(obj)
      return obj;
    }

    var newObj = {};
    console.log(newObj)
    for (var attr in obj) {
      newObj[attr] = deepCopy(obj[attr])
    }
    console.log(newObj)
    return newObj;

  }

  // var obj1 = copy(obj);
  // obj1.a.b = 20;
  // console.log(obj.a.b) // 20

  var obj2 = deepCopy(obj);
  obj2.a.b = 20;
  console.log(obj.a.b) // 10



  // 递归
  // 1.函数调用函数自身，执行递的操作
  // 2.最后一次判断一个终止条件，可以执行归的操作

  function factorial(n) {
    if (n == 1) {
      return 1;
    }
    return n * factorial(n - 1)
  }

  // console.log(factorial(5));



})()