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

  var lottery = {
    index: 0, // 当前元素
    count: 8, // 抽奖元素的个数
    timer: 0, // 定时器的ID
    speed: 200, // 转动速度
    times: 0, // 转动次数
    cycle: 20, // 转动基本次数，至少需要转动多少次才能进入到抽奖
    prize: -1, // 获奖元素下标
    itemArr: [], // 抽奖元素集合
    end: 3, // 在服务器获取的获奖信息
    callback: function() {},
    init: function(options) {
      console.log(options)
        // console.log(document.getElementById(id).getElementsByTagName("li")[0].classList);
      var _this = this;
      _this.callback = options.callback
      var itemArrTmp = document.getElementById(options.target).getElementsByClassName("lottery-item");
      for (var i = 0; i < itemArrTmp.length; i++) {
        _this.itemArr.push(document.getElementById(options.target).getElementsByClassName("item" + i)[0])
      }
      _this.itemArr[_this.index].classList.remove("active")
      _this.itemArr[0].classList.add("active")

      _this.speed = 200;
      _this.times = 0;
      _this.cycle = 50;
      _this.prize = -1;
      _this.index = 0;
      _this.end = parseInt(options.end) || 3;
    },
    roll: function() {
      roll()
    }
  };


  function roll() {
    // 转动次数+1
    lottery.times++;
    // 循环显示那个元素选中
    lottery.itemArr[lottery.index].classList.remove("active")
    lottery.index++;
    if (lottery.index >= lottery.count) {
      lottery.index = 0;
    }
    lottery.itemArr[lottery.index].classList.add("active");

    if (lottery.times > lottery.cycle + 5 && lottery.index === lottery.prize) {
      clearTimeout(lottery.timer);
      console.log("恭喜" + lottery.prize);
      lottery.callback && lottery.callback()
      lottery.prize = -1;
      lottery.times = 0;
    } else {
      if (lottery.times < lottery.cycle) {
        //如果循环次数小于设定的循环速度，则速度加快
        lottery.speed -= 10;
        lottery.speed = Math.max(40, lottery.speed);
      } else if (lottery.times == lottery.cycle) {
        //如果循环次数等于设定的循环速度
        lottery.prize = lottery.end;
      } else {
        //速度减慢
        lottery.speed += 20;
        // console.log(lottery.speed);
        lottery.speed = Math.min(200, lottery.speed);
      }
      // console.log(lottery.speed);
      //抽奖定时器
      lottery.timer = setTimeout(roll, lottery.speed);
      // console.log(lottery.timer);
    }


  }


  window.lottery = lottery;

})(window)