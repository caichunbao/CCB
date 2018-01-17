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
   * 
   * @param
   *  
   */

  var lottery = {
    index: 0, // 当前元素
    count: 8, // 抽奖元素的个数
    timer: 0, // 定时器的ID
    speed: 200, // 转动速度
    times: 0, // 转动次数
    cycle: 48, // 转动基本次数，至少需要转动多少次才能进入到抽奖
    prize: -1,
    itemArr: [], // 抽奖元素集合
    end: 5,
    init: function(id) {
      var containerElem = document.getElementById(id);
      var ulElem = document.createElement("ul");
      this.count = 8;
      for (var i = 0; i < 8; i++) {
        var liElem = document.createElement("li");
        liElem.classList.add("lottery-item");
        liElem.dataset.id = i;
        liElem.innerHTML = "第" + i + "个li";
        this.itemArr.push(liElem)
        ulElem.appendChild(liElem);
      }
      containerElem.appendChild(ulElem);
    },
    roll: function() {
      roll()
    }
  };


  function roll() {
    lottery.times++;

    lottery.itemArr[lottery.index].classList.remove("active")
    lottery.index++;
    if (lottery.index >= lottery.count) {
      lottery.index = 0;
    }
    lottery.itemArr[lottery.index].classList.add("active")
    console.log(lottery.index);
    if (lottery.times > lottery.cycle + 10 && lottery.prize == lottery.index) {
      clearTimeout(lottery.timer);
      lottery.prize = -1;
      lottery.times = 0;
    } else {
      if (lottery.times < lottery.cycle) {
        lottery.speed -= 10;
      } else if (lottery.times == lottery.cycle) {
        var index = lottery.end;
        lottery.prize = index;
      } else {
        lottery.speed += 20;
      }
      lottery.speed = Math.max(40, lottery.speed)
        // console.log(lottery.speed)
      lottery.timer = setTimeout(roll, lottery.speed)
    }
  }


  window.lottery = lottery;

})(window)