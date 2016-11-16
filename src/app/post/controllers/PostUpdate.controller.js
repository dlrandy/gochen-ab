import _ from 'lodash';
export default class PostUpdateController {
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
    updatePost(cb){
        let postBkp = _.create(this.newPost);
        this.newPost.$update(
              (post, headers)=>{
                  if(!post.message){
                        this.alertOperationResult.bind(this)(200, '成功修改文章');
                        this.newPost = post;
                  }
                  else{
                      this.newPost = _.assign(this.postService.createPost(),postBkp);
                      console.log('mmmmmmmmm',postBkp,'............');
                        this.alertOperationResult(500, '修改文章失败');
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

PostUpdateController.$inject = ['$scope','$timeout','POSTSERVICE', 'newPost'];
//PostAdd.controller.js:70 Uncaught ReferenceError: POSTSERVICE is not defined
//这里不加引号就会报上面的错误