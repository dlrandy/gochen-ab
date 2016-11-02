 export default class PostService{
	constructor($resource, $http){
		this.$http = $http;
		this.$Post = $resource('/api/posts/:id',{id:'@id'});
	}
 	getPostList() {
 		return this.$Post.query((result)=>{
 			return result;
 		})
 	}
 	getPostById(user_id) {
 		return this.$Post.get({
 			id: user_id
 		}, (result) => {
 			return  result;
 		})
 	}
 	putPostById(user_id) {
 		return this.$Post.put({
 			id: user_id
 		}, (result) => {
 			return  result;
 		})
 	}
 	deletePost(user_id) {
 		return this.$Post.remove({//not deelte for IE
 			id: user_id
 		}, (result) => {
 			return  result;
 		})
 	}
    createPost() {
    return this.$Post.save({
 			id: user_id
 		}, (result) => {
 			return  result;
 		}) 
    }
    

 }