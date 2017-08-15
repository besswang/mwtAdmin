var angular = require('angular');
var ngModule = angular.module('app',['ui.router']);
require('./router/router')(ngModule);

require('./assets/css/common.css');
require('./components/sell/sell');
//需要独立打包、异步加载的代码，使用require.ensure
require.ensure(['jquery'],function (require) {
    var $ = require('jquery');
    $(function(){
        var w = $(".mwtsidebar").width()+1;
        $(".side-sec-ul").css("left",w+"px");
        $(".menu-triangle").css("top","204px");
        $(".wrapper").mouseover(function () {
            var h = $(this).height();
            var of = $(this).offset().top;
            var ofh = of+h/2;
            $(".menu-triangle").css("top",ofh+"px");
            $(this).find(".side-sec-ul").css('display','block');
        }).mouseout(function () {
            $(".menu-triangle").css("top","204px");
            $(this).find(".side-sec-ul").css('display','none');
        });
        $(".nav>li").click(function () {
            $("this").addClass("active");
        });
    });
});
require.ensure(['./entry'],function (require) {
    var a = require('./entry');
    a('你好呀2233');
},'entry');
