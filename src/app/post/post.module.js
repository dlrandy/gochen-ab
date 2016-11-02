import angular from 'angular';
 
import PostController from './controllers/Post.controller';
import PostService from './services/Post.service';
import config from './config'

export default angular.module('postModule', [])
	.config(config)
	.controller('PostController', PostController)
	.service('PostService',PostService)
	.name;