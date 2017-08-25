require.config({
  // baseUrl: "src/js", //模块文件的根目录(相对于引入本文件的html)，跟本文件在同一目录的话可省略
  paths: {
    jquery: "../libs/jquery-3.2.1.min",
    //模块名:文件名 相同可省略
    // carousel: "carousel",
    // gotop: "gotop",
    // waterfall: "waterfall"
  }
});

require(['jquery','carousel','gotop'],function($,Carousels,GoTop,WaterFall){
  Carousels.init($('.carousel'))
  GoTop.init(0.95,0.05)
});