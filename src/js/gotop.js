define(['jquery'],function($) {
  var GoTop = function(left,bottom) {
    this.createNode(left,bottom)
    this.bindEvent('click',function() {
      $("html, body").animate({ scrollTop: "0px" });
    })
  }

  GoTop.prototype.createNode = function(left,bottom) {
    var node = $('<button id="gotop">顶部</button>')
    node.css({'position':'fixed'});
    node.css({'left':$(window).width()*left})
    node.css({'bottom':$(window).height()*bottom})
    $('body').append(node) 
    this.target = node
  }

  GoTop.prototype.bindEvent = function(event,handle) {
    this.target.on(event,handle)
  }

  var _GoTop = (function() {
    return {
      init: function(left,bottom) {
        new GoTop(left,bottom);
      }
    }
  })()

  return _GoTop;
});
    