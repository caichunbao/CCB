$(function() {
  //抽奖 
  var lottery = {
    index: 0, //当前转动到哪个位置，起点位置 ✅
    count: 0, //总共有多少个位置 ✅
    timer: 0, //setTimeout的ID，用clearTimeout清除
    speed: 20, //初始转动速度
    times: 0, //转动次数
    cycle: 50, //转动基本次数：即至少需要转动多少次再进入抽奖环节
    prize: -1, //中奖位置
    end: 5, //中奖位置


    // 初始化，确定开始位置、获取奖项的个数；
    init: function(id) {
      if ($("." + id).find(".lottery-unit").length > 0) {
        $lottery = $("." + id);
        $units = $lottery.find(".lottery-unit");
        this.obj = $lottery;
        this.count = $units.length;
        console.log($units.length);
        $lottery.find(".lottery-unit-" + this.index).addClass("active");
      };
    },


    roll: function(num) {
      var index = this.index;
      var count = this.count;
      var lottery = this.obj;
      console.log(count);
      $(lottery).find(".lottery-unit-" + index).removeClass("active");
      index += 1;
      if (index > count) {
        index = 1;
      };
      $(lottery).find(".lottery-unit-" + index).addClass("active");
      this.index = index;
      // return false;
    },

    stop: function(index) {
      this.prize = index;
      // return false;
    }
  };

  function roll() {
    lottery.times += 1;
    lottery.roll();
    //确定抽奖，重置参数
    if (lottery.times > lottery.cycle + 10 && lottery.prize == lottery.index) {
      clearTimeout(lottery.timer); //大于基本转动次数+10，并转动到获奖位置，停止转动
      lottery.prize = -1;
      lottery.times = 0;
      click = false;
    } else {
      if (lottery.times < lottery.cycle) {
        lottery.speed -= 10; //小于基本转动次数 转动加速
      } else if (lottery.times == lottery.cycle) {
        var index = lottery.end;
        lottery.prize = index; //确定中奖位置
      } else {
        lottery.speed += 20; //大于基本转动次数 转动减速
      }
      if (lottery.speed < 40) {
        lottery.speed = 40;
      };
      lottery.timer = setTimeout(roll, lottery.speed);
    }
    // return false;
  }

  var click = false;

  window.onload = function() {
    lottery.init('lottery');
    $(".lottery-btn a.lottery-start").click(function(e) {
      var target = $(e.target);
      if (click) {
        return false;
      } else {
        //此处应该是ajax请求，由于跨域，暂省略
        lottery.speed = 100;
        lottery.end = 7;
        roll();
        click = true;
        target.parents('.lottery-btn').addClass('hide');
        $('.has-lottery').removeClass('hide');
        console.log(1)
          // return false;
      }
    });
  };
});