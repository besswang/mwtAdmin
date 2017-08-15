<!DOCTYPE html>
<html lang="en" ng-app="app">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.css">
    <!--公共样式-->
    <link href="css/common.css" rel="stylesheet">
  </head>
  </head>
  <body>
    <div class="container-fluid">
      <div class="row">
        <!--左边导航栏start-->
        <div class="col-sm-2 sidebar mwtsidebar">
          <img class="img-responsive blue-logo" src="image/blue-logo.png" alt="">
          <p class="shop">杭州五鲜谷东</p>
          <h6 class="user-hello">你好：<span class="user">15057187176</span></h6>
          <span class="caret menu-triangle"></span>
          <ul class="nav nav-sidebar mwtsidebar-ul">
            <li class="wrapper active">
              <a class="icon i1" href="#" ui-sref="view">店铺概况</a>
            </li>
            <li class="wrapper">
              <a class="icon i2" ui-sref="store">销售管理</a>
              <ul class="side-sec-ul">
                <li ui-sref-active="active" ui-sref-active-eq >
                  <a ui-sref="store">店内收银</a>
                </li>
                <li ui-sref-active="active"><a ui-sref="online">线上订单</a></li>
              </ul>
            </li>
            <li class="wrapper">
              <a class="icon i3">仓库管理</a>
              <ul class="side-sec-ul flex flex-row">
                <li><a href="#">采购入库</a></li>
                <li><a href="#">退货入库</a></li>
                <li><a href="#">库存盘点</a></li>
                <li><a href="#">报损报益</a></li>
                <li><a href="#">仓库管理</a></li>
                <li><a href="#">调拨管理</a></li>
                <li><a href="#">调货单</a></li>
              </ul>
            </li>
            <li class="wrapper">
              <a class="icon i4" href="#">统计报表</a>
              <ul class="side-sec-ul flex flex-row">
                <li><a href="#">销售统计</a></li>
                <li><a href="#">销售明细</a></li>
                <li><a href="#">销售分类汇总</a></li>
                <li><a href="#">销售报表</a></li>
                <li><a href="#">毛利统计</a></li>
                <li><a href="#">退货统计</a></li>
                <li><a href="#">保质期查询</a></li>
                <li><a href="#">库存价值表</a></li>
                <li><a href="#">库存预警</a></li>
                <li><a href="#">调拨记录</a></li>
                <li><a href="#">调货汇总</a></li>
                <li><a href="#">调货明细</a></li>
              </ul>
            </li>
            <li class="wrapper">
              <a class="icon i5" href="#">往来单位</a>
              <ul class="side-sec-ul">
                <li><a href="#">客户单位</a></li>
                <li><a href="#">客户分类</a></li>
                <li><a href="#">供应商管理</a></li>
              </ul>
            </li>
            <li class="wrapper">
              <a class="icon i6" href="#">基础设置</a>
              <ul class="side-sec-ul">
                <li><a href="#">商品管理</a></li>
                <li><a href="#">商品分类</a></li>
                <li><a href="#">计量单位</a></li>
                <li><a href="#">价格星级</a></li>
              </ul>
            </li>
            <li class="wrapper">
              <a class="icon i7" href="#">财务管理</a>
              <ul class="side-sec-ul">
                <li><a href="#">收款管理</a></li>
                <li><a href="#">采购单管理</a></li>
                <li><a href="#">采购付款</a></li>
              </ul>
            </li>
            <li class="wrapper">
              <a class="icon i8" href="#">出纳管理</a>
              <ul class="side-sec-ul">
                <li><a href="#">账户明细</a></li>
                <li><a href="#">账户管理</a></li>
                <li><a href="#">科目管理</a></li>
              </ul>
            </li>
            <li class="wrapper">
              <a class="icon i9" href="#">员工管理</a>
              <ul class="side-sec-ul">
                <li><a href="#">员工管理</a></li>
                <li><a href="#">岗位管理</a></li>
                <li><a href="#">部门管理</a></li>
              </ul>
            </li>
            <li class="wrapper">
              <a class="icon i10" href="#">系统设置</a>
              <ul class="side-sec-ul">
                <li><a href="#">商城信息</a></li>
                <li><a href="#">我的打印机</a></li>
                <li><a href="#">送货单格式</a></li>
                <li><a href="#">系统选项</a></li>
                <li><a href="#">商城二维码</a></li>
                <li><a href="#">修改密码</a></li>
                <li><a href="#">通知管理</a></li>
              </ul>
            </li>
            <li class="wrapper">
              <a class="icon i11" href="#">退出登录</a>
            </li>
          </ul>
        </div>
        <!--左边导航栏end-->
        <!--右边内容start-->

        <div class="col-sm-10 pull-right">
            <!--这里做动态加载区域-->
            <div ui-view>
              <!--店铺概况-->
              <!--面包屑导航start-->
              <div class="row">
                <ul class="breadcrumb">
                  <li>
                    <a class="cl333" href="#">店铺概况</a>
                  </li>
                  <!--<li>-->
                  <!--<a href="#">Tutorials</a>-->
                  <!--</li>-->
                  <!--<li class="active">HTML5</li>-->
                </ul>
                <hr>
              </div>
              <!--面包屑导航end-->
              <div class="row">
                <div class="col-md-12 flex flex-row flex-align-center">
                  <div class="img-responsive mai"></div>
                  <p class="flex-1 shop-info">杭州五鲜谷冻品</p>
                </div>
              </div>
              <div class="row placeholders">
                <div class="col-xs-6 col-sm-2 placeholder ech-info">
                  <h4>300</h4>
                  <span>昨日浏览量</span>
                </div>
                <div class="col-xs-6 col-sm-2 placeholder ech-info">
                  <h4>100</h4>
                  <span>昨日访客数</span>
                </div>
                <div class="col-xs-6 col-sm-2 placeholder ech-info">
                  <h4>500</h4>
                  <span>昨日商品浏览量</span>
                </div>
                <div class="col-xs-6 col-sm-2 placeholder ech-info">
                  <h4>10</h4>
                  <span>昨日商品访客数</span>
                </div>
                <div class="col-xs-6 col-sm-2 placeholder ech-info">
                  <h4>73</h4>
                  <span>商品</span>
                </div>
                <div class="col-xs-6 col-sm-2 placeholder ech-info" style="border-right:0;">
                  <h4>￥5.0000.00</h4>
                  <span>昨日销量总额</span>
                </div>
              </div>
              <blockquote>
                <p>流量趋势</p>
              </blockquote>
              <div class="echart">
                echar图表
                <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
                <div id="main" style="height:400px"></div>
              </div>
              <blockquote>
                <p>商品销量排行榜</p>
              </blockquote>
              <table>
                bootstrap table
              </table>
            </div>
        </div>
        <!--右边内容end-->
      </div>
    </div>
  </body>
</html>
<script type="text/javascript" src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.js"></script>

<!--时间控件start-->
<link rel="stylesheet" href="https://cdn.bootcss.com/pikaday/1.6.1/css/pikaday.css">
<script type="text/javascript" src="https://cdn.bootcss.com/pikaday/1.6.1/pikaday.js"></script>
<!--时间控件end-->

<!--angular-->
<script type="text/javascript" src="https://cdn.bootcss.com/angular.js/1.6.5/angular.js"></script>
<script type="text/javascript" src="https://cdn.bootcss.com/angular-ui-router/1.0.3/angular-ui-router.js"></script>

<!--折线图-->
<!--<script src="./plugins/zrender.js"></script>-->
<script src="http://echarts.baidu.com/build/dist/echarts.js"></script>
<!--<script type="text/javascript" src="./plugins/echarts/echarts.js"></script>-->

<!--<script type="text/javascript" src="index.js"></script>-->
<!--<script type="text/javascript" src="entry.js"></script>-->
<script type="text/javascript">
     var app = angular.module('app', ['ui.router']);
     app.config(function($stateProvider, $urlRouterProvider,$locationProvider){
     //angulaur 路由！
         $locationProvider.hashPrefix('');
         // 默认路由设置
     //        $urlRouterProvider.otherwise('view.html');
         $stateProvider
             .state('view', {
                 url: 'view.html',
                 templateUrl:'components/view/view.html',
                 controller:'viewCtr'
             })
             .state('store', {
                 url: 'store.html',
                 templateUrl:'components/sell/store.html'
             })
             .state('online', {
                 url: 'online.html',
                 templateUrl:'components/sell/online.html'
             })
             .state('store.selladd', {
                 url: '/selladd.html',
                 templateUrl:'components/sell/selladd.html'
             })

     });
     app.controller('selladdCtr', function($scope) {
         // we will store all of our form data in this object
         $scope.formData = {};
         // function to process the form
         $scope.aFn = function() {
             console.log('awesome!');
         };
     });
</script>