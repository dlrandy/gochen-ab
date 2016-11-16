export default class PostController {
	constructor($scope, POSTSERVICE, postList) {
		this.name = 'RandyChen ';  
		this.$scope = $scope;
		this.postService = POSTSERVICE;
		this.postList = postList;
	}
	delete(id){

		var res = this.postService.deletePost(id, (res) =>{
		if(!!res.post){
			this.postList.splice(_.findIndex(this.postList, (post)=> post.id == id ),1);
			this.postList = [...this.postList];
		}else{
         alert(res.message||'出错了')                    
		}
		});
	}
}

PostController.$inject = ['$scope','POSTSERVICE', 'postList'/*, 'newPost'*/];
//npr] Unknown provider: newPostProvider <- newPost