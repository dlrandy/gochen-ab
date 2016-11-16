import _ from 'lodash';
export default class AuthorAddController {
	constructor($scope, $timeout, $state, AUTHORSERVICE, newAuthor) {
		this.name = 'RandyChen ';  
		this.$scope = $scope;
        this.timeout = $timeout;
        this.$state = $state;
		this.AUTHORSERVICE = AUTHORSERVICE;
		this.newAuthor = newAuthor;
        this.$alert = false;
        this.error = false;
        this.success = false;
        this.$$alert = '';
	}
    submitNewAuthor(cb){
        let postBkp = {};
        _.assign(postBkp,this.newAuthor);
        this.newAuthor.$save(
              (post, headers)=>{
                  if(!post.message){
                    //    alert('添加作者成功')
                       this.$state.go('app.author',{}, { reload: true });
                  }
                  else{
                      this.newAuthor = _.assign(this.AUTHORSERVICE.createAuthor(),postBkp);
                        alert('添加失败');
                  }
              }
        );
        
    }
    alertOperationResult(statusClass, statusInfo){
        if(statusClass>=200&&statusClass<204) 
        {
            this.error = false;
            this.success = true;
        } else {
            this.error = true;
            this.success = false;
        }
         this.$$alert = statusInfo;
         this.$alert = true;
         let promise =this.timeout(()=>{
            this.$alert = false;
            this.error = false;
            this.success = false;
            this.$$alert = '';
            this.timeout.cancel(promise);
        }, 10000);
        
    }
}

AuthorAddController.$inject = ['$scope','$timeout','$state','AUTHORSERVICE', 'newAuthor'];
//PostAdd.controller.js:70 Uncaught ReferenceError: AUTHORSERVICE is not defined
//这里不加引号就会报上面的错误