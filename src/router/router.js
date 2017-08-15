
module.exports = function(ngModule) {
    ngModule.controller('expl',['$scope',function ($scope) {
        $scope.texts = '2233';
    }])
    ngModule.config(function($stateProvider, $urlRouterProvider,$locationProvider){
        //angulaur 路由！
        $locationProvider.hashPrefix('');
        // 默认路由设置
        //        $urlRouterProvider.otherwise('view.html');
        $stateProvider
            .state('view', {
                url: 'view.html',
                // templateUrl:require('./components/view/view.html')
                restrict: 'A',
                template: require('../components/view/view.html')
            })
            .state('store', {
                url: 'store.html',
                restrict: 'A',
                template: require('../components/sell/store.html'),
                controller:'storeCtr'
            })
            .state('online', {
                url: 'online.html',
                restrict: 'A',
                template: require('../components/sell/online.html')
            })
            .state('store.selladd', {
                url: '/selladd.html',
                restrict: 'A',
                template: require('../components/sell/selladd.html')
            })
            .state('storehouse', {
                url: 'storehouse.html',
                restrict: 'A',
                template: require('../components/sell/store.html'),
                controller:'storehouseCtr'
            })

    })
    ngModule.controller('storeCtr',['$scope',function ($scope) {
        $scope.tabArr = [
            //id定义方法为：一级类目id+二级类目id+tab状态；
            {'title':'草稿箱','state':'0','num':'1','on':'active'},
            {'title':'已退回','state':'1','num':'2','on':''},
            {'title':'待接收','state':'2','num':'3','on':''},
            {'title':'待发货','state':'3','num':'4','on':''},
            {'title':'已发货','state':'4','num':'5','on':''},
            {'title':'已作废','state':'5','num':'6','on':''}
        ];
        $scope.toggle = function (id) {
            $scope.id = id;
            alert(id);
        }
    }])
    ngModule.controller('storehouseCtr',['$scope',function ($scope) {
        $scope.navArr = [
            {'title':'仓库管理'},
            {'title':'采购入库'}
        ]
        $scope.tabArr = [
            //id定义方法为：一级类目id+二级类目id+tab状态；
            {'title':'新制单','state':'0','num':'1','on':'active'},
            {'title':'已入库','state':'1','num':'2','on':''},
            {'title':'已回款','state':'2','num':'3','on':''}
        ];
    }])

}
