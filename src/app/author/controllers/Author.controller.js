export default class AuthorController {
	constructor($scope, authorService) {
		this.name = 'RandyChen ';  
		this.$scope = $scope;
		this.authorService = authorService;
	}
}

AuthorController.$inject = ['$scope','authorService'];