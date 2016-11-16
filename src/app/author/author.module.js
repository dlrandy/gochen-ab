import angular from 'angular';
 
import AuthorController from './controllers/Author.controller';
import AuthorService from './services/Author.service';
import config from './config'

export default angular.module('authorModule', [])
	.config(config)
	// .controller('AuthorController', AuthorController)
	.factory('AUTHORSERVICE',['$resource','$http',($resource, $http) => (new AuthorService($resource, $http))])
	.name;