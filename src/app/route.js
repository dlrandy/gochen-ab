export default function routing(
    $stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $httpProvider.interceptors.push('loadingInterceptor');
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $urlRouterProvider.otherwise('/');

}
