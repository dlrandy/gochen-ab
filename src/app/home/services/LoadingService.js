export default class LoadingService {
    constructor($rootScope) {
        this.$rootScope = $rootScope;
    }
    setLoading(loading) {
       this.$rootScope.loadingView = loading;
    }
}