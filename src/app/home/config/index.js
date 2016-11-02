
import homeTemplate from '../tmpl/template.html';
import HomeController from '../controllers/Home.controller';


export default function routing(
    $stateProvider) {
    $stateProvider
        .state('app', {
            url: '/',
            templateUrl: homeTemplate,
            controller: HomeController,
            controllerAs: 'homeCtrl',
            resolve: {
                homeList: () => {
                    return [];
                }
                
            }
        })
}
