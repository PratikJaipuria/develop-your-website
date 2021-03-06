/**
 * Created by Pratik on 2/7/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .config(configuration);
    
    //function configuration($routeProvider) {
    function configuration($routeProvider, $locationProvider, $httpProvider) {

        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        $httpProvider.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';

        $routeProvider
            .when("/",{
                templateUrl: "views/user/templates/login.view.client.html",
                controller: "loginController",
                controllerAs: "model"
            })

            .when("default",{
                templateUrl: "views/user/templates/login.view.client.html",
                controller: "loginController",
                controllerAs: "model"
            })

            .when("/login",{
                templateUrl: "views/user/templates/login.view.client.html",
                controller: "loginController",
                controllerAs: "model"
            })

            .when("/register",{
                templateUrl: "views/user/templates/register.view.client.html",
                controller: "registerController",
                controllerAs: "model"
            })

            .when("/profile/:uid",{
                 templateUrl: "views/user/templates/profile.view.client.html",
                 controller: "profileController",
                 controllerAs: "model"
            })

            .when("/user/:uid/website",{
                templateUrl: "views/website/templates/website-list.view.client.html",
                controller: "WebsiteListController",
                controllerAs: "model"
            })

            .when("/user/:uid/website/new",{
                templateUrl: "views/website/templates/website-new.view.client.html",
                controller: "WebsiteNewController",
                controllerAs: "model"
            })
            .when("/user/:uid/website/:wid",{
                templateUrl: "views/website/templates/website-edit.view.client.html",
                controller: "WebsiteEditController",
                controllerAs: "model"
            })

            .when("/user/:uid/website/:wid/page",{
                templateUrl: "views/pages/templates/page-list.view.client.html",
                controller: "PageListController",
                controllerAs: "model"
            })

            .when("/user/:uid/website/:wid/page/new",{
                templateUrl: "views/pages/templates/page-new.view.client.html",
                controller: "NewPageController",
                controllerAs: "model"
            })

            .when("/user/:uid/website/:wid/page/:pid",{
                templateUrl: "views/pages/templates/page-edit.view.client.html",
                controller: "EditPageController",
                controllerAs: "model"
            })

            .when("/user/:uid/website/:wid/page/:pid/widget",{
                templateUrl: "views/widget/templates/widget-list.view.client.html",
                controller: "WidgetListController",
                controllerAs: "model"
            })

            .when("/user/:uid/website/:wid/page/:pid/widget/new",{
                templateUrl: "views/widget/templates/widget-chooser.view.client.html",
                controller: "WidgetNewController",
                controllerAs: "model"
            })


            .when("/user/:uid/website/:wid/page/:pid/widget/new/:wg",{
                templateUrl: "views/widget/templates/widget-new.view.client.html",
                controller: "WidgetCreateController",
                controllerAs: "model"

            })

            .when("/user/:uid/website/:wid/page/:pid/widget/:wgid",{
                templateUrl: "views/widget/templates/widget-edit.view.client.html",
                controller: "WidgetEditController",
                controllerAs: "model"});


    }
})();