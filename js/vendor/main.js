
var app = angular.module('RhemaWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider /*, $locationProvider*/) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
  // Home > Tabs
  .when("/tabdefault", {templateUrl: "partials/home.html", controller: "PageCtrl"})
  .when("/tab2default", {templateUrl: "partials/home.html", controller: "PageCtrl"})
  .when("/tab4default", {templateUrl: "partials/home.html", controller: "PageCtrl"})
  .when("/tab5default", {templateUrl: "partials/home.html", controller: "PageCtrl"})
  .when("/carousel-example-generic", {templateUrl: "partials/home.html", controller: "PageCtrl"})
  
  
    // Pages
    .when("/aboutchurch", {templateUrl: "partials/aboutchurch.html", controller: "PageCtrl"})
    .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
    .when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
    .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
    .when("/event", {templateUrl: "partials/event.html", controller: "PageCtrl"})
  .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
  .when("/prayer_request", {templateUrl: "partials/prayer_request.html", controller: "PageCtrl"})
  .when("/community_outreach", {templateUrl: "partials/community_outreach.html", controller: "PageCtrl"})
    .when("/photo_gallery", {templateUrl: "partials/photo_gallery.html", controller: "PageCtrl"})
    .when("/donate", {templateUrl: "partials/donate.html", controller: "PageCtrl"})
   .when("/men", {templateUrl: "partials/men.html", controller: "PageCtrl"})
  .when("/women", {templateUrl: "partials/women.html", controller: "PageCtrl"})
  .when("/youth", {templateUrl: "partials/youth.html", controller: "PageCtrl"})
  .when("/children", {templateUrl: "partials/children.html", controller: "PageCtrl"})
   .when("/departments", {templateUrl: "partials/departments.html", controller: "PageCtrl"})
  .when("/sermons", {templateUrl: "partials/sermons.html", controller: "PageCtrl"})
   .when("/bible_study", {templateUrl: "partials/bible_study.html", controller: "PageCtrl"})
   .when("/audios_videos", {templateUrl: "partials/audios_videos.html", controller: "PageCtrl"})
   .when("/church_library", {templateUrl: "partials/church_library.html", controller: "PageCtrl"})
    // Blog
    .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
    
    // HTML5 History API
    //$locationProvider.html5Mode(true);
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
 // $('.carousel').carousel({
    //interval: 5000
  //});

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});