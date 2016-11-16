import _ from 'lodash';
export default class PostAddController {
	constructor($scope, $timeout, POSTSERVICE, newPost) {
		this.name = 'RandyChen ';  
		this.$scope = $scope;
        this.timeout = $timeout;
		this.postService = POSTSERVICE;
		this.newPost = newPost;
        this.$alert = false;
        this.error = false;
        this.success = false;
        this.$$alert = '';
	}
    submitNewPost(cb){
        let postBkp = {};
        _.assign(postBkp,this.newPost);
        this.newPost.$save(
              (post, headers)=>{
                  if(!post.message){
                        this.alertOperationResult.bind(this)(200, '成功添加文章');
                        this.newPost = this.postService.createPost();
                  }
                  else{
                      this.newPost = _.assign(this.postService.createPost(),postBkp);
                        this.alertOperationResult(500, '添加文章失败');
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

PostAddController.$inject = ['$scope','$timeout','POSTSERVICE', 'newPost'];
//PostAdd.controller.js:70 Uncaught ReferenceError: POSTSERVICE is not defined
//这里不加引号就会报上面的错误