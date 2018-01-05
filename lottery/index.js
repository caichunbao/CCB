/**
 * lottery javascript
 * created by cai
 * 
 * Date 2018-01-02
 * Email vipcaichunbao@163.com
 */

(function(){
  /**
   * 抽奖的函数
   * 
   * @param data 
   * data需要传入触发抽奖的元素{target:HTMLElement}
   * 
   */
  var lottery = function(data){
    var data = data;
    var pointerElem = document.getElementById(data.target);
    pointerElem.addEventListener("click",handler)

    /**
     * 处理抽奖的动画的函数
     * 
     * 点击之后，防止多次点击，把点击事件移除掉
     * 
     * 当前随机数模拟，正式的通过接口获取
     * 
     */ 
    function handler(){
      pointerElem.removeEventListener("click",handler)
      var num = Math.ceil(Math.random()*8);
      var degNum = num*45 + 3600 - Math.ceil(Math.random()*35);
      pointerElem.style.cssText = "transition: all 2s;transform: rotate("+degNum+"deg);";
      setTimeout(function(){
        switch (num) {
          case 1:
            alert("恭喜你获得iWatch");
            break;
          case 2:
            alert("恭喜你获得iPad");
            break;
          case 3:
            alert("恭喜你获得10元红包");
            break;
          case 4:
            alert("恭喜你获得一辆自行车");
            break;
          case 5:
            alert("恭喜你获得充值卡");
            break;
          case 6:
            alert("恭喜你获得iPhone 6s");
            break;
          case 7:
            alert("恭喜你获得88元红包");
            break;
          case 8:
            alert("恭喜你获得美元");
            break;
          default:
            alert("网络超时")
            break;
        }
        pointerElem.style.cssText = "transform: rotate(0deg);";
        pointerElem.addEventListener("click",handler)
      },2000)
    }
  }

  // 导出接口
  window.lottery = lottery;

})(window)