import angular from 'angular';
 import angularResource from 'angular-resource';

import PostController from './controllers/Post.controller';
import PostAddController from './controllers/PostAdd.controller';
import PostService from './services/Post.service';
import config from './config';

export default angular.module('postModule', [angularResource])
	.config(config)
	// .controller('PostController', PostController)
	// .controller('PostAddController', PostAddController)在路由里添加了的 这里就可以省略了
	.factory('POSTSERVICE',['$resource','$http',($resource, $http) => (new PostService($resource, $http))])
	.name