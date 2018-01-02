/**
 * lottery javascript
 * created by cai
 * 
 * Date: 2018-01-02
 */

(function(){
  var result = function(data){
    var data = data;
    pointerElem = document.getElementById(data.target)
    pointerElem.onclick = function(){
      var num = Math.ceil(Math.random()*8);
      var degNum = num*45 + 1800 + Math.ceil(Math.random()*40);
      pointerElem.style.cssText = "transform: rotate("+degNum+"deg);";
      window.setTimeout(function(){
        alert(degNum)
        pointerElem.style.cssText = "transform: rotate(0deg);";
      },2000)
    }
  }
  window.lottery = result
})(window)