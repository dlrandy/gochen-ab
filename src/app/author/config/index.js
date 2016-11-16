
import authorTemplate from '../tmpl/template.html';
import AuthorController from '../controllers/Author.controller';
import authorAddTemplate from '../tmpl/add.html';
import AuthorAddController from '../controllers/AuthorAdd.controller';

export default function routing(
    $stateProvider) {
    $stateProvider
        .state('app.author', {
            url: 'author',
            templateUrl: authorTemplate,
            controller: AuthorController,
            controllerAs: 'authorCtrl',
            resolve: {
                authorList: (AUTHORSERVICE) => {
                    return AUTHORSERVICE.getAuthorList();
                }
                
            }
        })
        .state('app.author.add', {
            url: '/add',
            templateUrl: authorAddTemplate,
            controller: AuthorAddController,
            controllerAs: 'authorAddCtrl',
            resolve: {
                newAuthor: (AUTHORSERVICE) => {
                    return AUTHORSERVICE.createAuthor();
                }
                
            }
        })
}
