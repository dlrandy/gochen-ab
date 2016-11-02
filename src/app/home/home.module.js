import angular from 'angular';
 
import postModule from '../post/post.module';
import authorModule from '../author/author.module';

import HomeController from './controllers/Home.controller'
import config from './config'

export default angular.module('app', [postModule,authorModule])
	.config(config)
    // .controller('homeController',HomeController)
	.name;