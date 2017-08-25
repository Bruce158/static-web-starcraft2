define(['jquery'],function($) {
  var Carousel = function($node) {
    this.init($node);
    this.bind()
  }

  Carousel.prototype.init = function($node) {
    this.$btnPrev = $node.find('.btn-prev')
    this.$btnNext = $node.find('.btn-next')
    this.$tumbnail = $node.find('.tumbnail li')
    this.$imgCt = $node.find('.img-ct')
    var $imgs = $node.find('.img-ct li') 
      $imgs.width($(window).width()) //全屏轮播
    this.$imgLength = $imgs.length
    this.$imgWidth = $imgs.first().width()
    this.index = 1
    this.animateing = false

    this.$imgCt.prepend($imgs.last().clone())
    this.$imgCt.append($imgs.first().clone())

    this.$imgCt.width((this.$imgLength + 2)*this.$imgWidth)//全屏轮播 
    this.$imgCt.css({'left': - this.$imgWidth})

    var _this = this
    this.id = setInterval(function(){
      _this.playNext(1)
    },3000)
  }

  Carousel.prototype.bind = function() {
    var _this = this
    this.$btnPrev.on('click',function() {
      _this.playPrev(1)
    })

    this.$btnNext.on('click',function() {
      _this.playNext(1)
    })

    this.$tumbnail.on('click',function() {
      if (_this.animateing) return
      var cur = $(this).index()+1
      if (cur > _this.index)
        _this.playPrev(_this.index - cur)
      else if (cur < _this.index)
        _this.playNext(cur - _this.index)
    })
  }

  Carousel.prototype.playNext = function(len) {
    if (this.animateing) return
    else this.animateing = true
    var _this = this
    this.$imgCt.animate({'left': '-='+_this.$imgWidth*len},function() {
      _this.index += len;
      if (_this.index > _this.$imgLength) {
        _this.index = 1;
        _this.$imgCt.css({'left': - _this.$imgWidth})
      }
      _this.icon_active(_this.index-1)
      _this.animateing = false
    })   
  }

  Carousel.prototype.playPrev = function(len) {
    if (this.animateing) return
    else this.animateing = true
    var _this = this
    this.$imgCt.animate({'left': '+='+_this.$imgWidth*len},function() {
      _this.index -= len;
      if (_this.index <= 0) {
        _this.index = _this.$imgLength;
        _this.$imgCt.css({'left': -_this.$imgWidth*_this.$imgLength})
      }
      _this.icon_active(_this.index-1)
      _this.animateing = false
    }) 
  }

  Carousel.prototype.icon_active = function(n) {
    this.$tumbnail.removeClass('active')
    this.$tumbnail.eq(n).addClass('active')
  }

  var Carousels = (function(){
    return {
      init: function($target) {
        $target.each(function(index,node) {
          new Carousel($(node));
        })
      }
    }
  })()

  return Carousels;
});

    
