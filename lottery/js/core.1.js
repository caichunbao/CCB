/**
 * 跑马灯抽奖核心javascript代码
 * 
 * @description: 抽奖
 * 
 * @author: Chunbao Tsai
 * @email: vipcaichunbao@163.com
 * @date: 2018年 1月16日 星期二 14时48分50秒 CST 
 * 
 * 
 */

(function(window) {

  /**
   * @param
   *  
   */

  var defaultOptions = {
      index: 0, // 当前元素
      count: 8, // 抽奖元素的个数
      timer: 0, // 定时器的ID
      speed: 200, // 转动速度
      times: 0, // 转动次数
      cycle: 30, // 转动基本次数，至少需要转动多少次才能进入到抽奖
      prize: -1, // 获奖元素下标
      itemArr: [], // 抽奖元素集合
      end: 3, // 在服务器获取的获奖信息
      callback: function() {},
    },
    Lottery = function() {};

  Lottery.prototype = {
    constructor: Lottery,
    init: function(data) {
      var defaults = {};
      // console.log(defaultOptions);
      defaults = deepCopy(defaultOptions);
      console.log(defaults);
      defaults = Object.assign(defaults, data);

      //保存奖项元素集合
      for (var i = 0; i < defaults.count; i++) {
        defaults.itemArr.push(document.getElementById(defaults.target).getElementsByClassName("item" + i)[0])
      }

      roll(defaults);
    },

  }

  function roll(param) {
    // 转动次数+1
    param.times++;
    // 循环显示那个元素选中
    param.itemArr[param.index].classList.remove("active")
    param.index++;
    if (param.index >= param.count) {
      param.index = 0;
    }
    param.itemArr[param.index].classList.add("active");

    if (param.times < param.cycle) {
      //如果循环次数小于设定的循环速度，则速度加快
      param.speed -= 10;
      param.speed = Math.max(40, param.speed);
    } else if (param.times == param.cycle) {
      //如果循环次数等于设定的循环速度
      param.prize = param.end;
      console.log(param.prize);
    } else {
      //速度减慢
      param.speed += 20;
      param.speed = Math.min(260, param.speed);
      console.log(param.speed);
    }


    if (param.times > param.cycle + 10 && param.index === param.prize) {
      // console.log(param.timer);
      // clearTimeout(param.timer);
      console.log("恭喜" + param.prize);
      param.callback && param.callback(param.prize);
    } else {
      setTimeout(function() {
        // console.log(param)
        roll(param)
      }, param.speed);
    }


  }



  function deepCopy(obj) {
    var target;

    if (Object.prototype.toString.call(obj) == "[object Object]") {
      target = {};
    } else if (Object.prototype.toString.call(obj) == "[object Array]") {
      target = [];
    } else {
      return obj;
    }


    if (Object.prototype.toString.call(obj) == "[object Object]") {
      for (var key in obj) {
        target[key] = deepCopy(obj[key])
      }
    } else if (Object.prototype.toString.call(obj) == "[object Array]") {
      for (var i = 0; i < obj.length; i++) {
        target.push(deepCopy(obj[i]))
      }
    }

    return target;
  }



  window.lottery = new Lottery();

})(window)