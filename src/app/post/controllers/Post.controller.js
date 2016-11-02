export default class PostController {
	constructor($scope, authorService) {
		this.name = 'RandyChen ';  
		this.$scope = $scope;
		this.postService = postService;
	}
}

PostController.$inject = ['$scope','postService'];