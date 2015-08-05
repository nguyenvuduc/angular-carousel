angular.module('angular-carousel')
.directive('rnCarouselTabsIndicators', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        scope: {
            titles: '=',
            index: '=rnCarouselIndex'
        },
        templateUrl: 'carousel-tabs-indicators.html',
        link: function (scope, iElement, iAttributes) {
            var indexModel = $parse(iAttributes.rnCarouselIndex);
            scope.goToSlide = function (index) {
                indexModel.assign(scope.$parent, index);
            };
        }
    };
}]);

angular.module('angular-carousel').run(['$templateCache', function ($templateCache) {
    $templateCache.put('carousel-tabs-indicators.html',
        '<ul class="rn-carousel-tab-indicator">\n' +
          '<li ng-repeat="title in titles" ng-class="{active: $index==index}" ng-click="goToSlide($index)">{{title}}</li>' +
        '</ul>'
    );
}]);