
import postTemplate from '../tmpl/template.html';
import PostController from '../controllers/Post.controller';

export default function routing(
    $stateProvider) {
    $stateProvider
        .state('app.post', {
            url: 'post',
            templateUrl: postTemplate,
            controller: PostController,
            controllerAs: 'postCtrl',
            resolve: {
                PostList: (PostService) => {
                    return [];
                }
                
            }
        })
}
