
import authorTemplate from '../tmpl/template.html';
import AuthorController from '../controllers/Author.controller';


export default function routing(
    $stateProvider) {
    $stateProvider
        .state('app.author', {
            url: 'author',
            templateUrl: authorTemplate,
            controller: AuthorController,
            controllerAs: 'authorCtrl',
            resolve: {
                authorList: (authorService) => {
                    return [];
                }
                
            }
        })
}
