
import postTemplate from '../tmpl/template.html';
import postAddTemplate from '../tmpl/add.html';
import postUpdateTemplate from '../tmpl/edit.html';

import PostController from '../controllers/Post.controller';
import PostAddController from '../controllers/PostAdd.controller';
import PostUpdateController from '../controllers/PostUpdate.controller';
 
export default function routing(
    $stateProvider) {
    $stateProvider
        .state('app.post', {
            url: 'post',
            templateUrl: postTemplate,
            controller: PostController,
            controllerAs: 'postCtrl',
            resolve: {
                postList: (POSTSERVICE) => {
                    return POSTSERVICE.getPostList();
                }
                
            }
        })
        .state('app.postadd', {
            url: 'post/add',
            templateUrl: postAddTemplate,
            controller: PostAddController,
            controllerAs: 'postAddCtrl',
            resolve: {
                newPost: (POSTSERVICE) => {
                    return POSTSERVICE.createPost();
                }
                
            }
        })
         .state('app.postupdate', {
            url: 'post/update/:id',
            templateUrl: postUpdateTemplate,
            controller: PostUpdateController,
            controllerAs: 'postUptCtrl',
            resolve: {
                newPost: ($stateParams,POSTSERVICE) => {
                    return POSTSERVICE.getPostById($stateParams.id);
                }
                
            }
        })
}
