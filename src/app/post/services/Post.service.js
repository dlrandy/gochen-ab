 export default class PostService{
	constructor($resource, $http){
		this.$http = $http;
		this.$Post = $resource('/api/posts/:id',{id:'@id'}, {
        	update: {method: 'PUT'}
   		 });
	}
 	getPostList() {
 		return this.$Post.query();
 	}
 	getPostById(post_id) {
 		return this.$Post.get({
 			id: post_id
		 })
 	}
 	putPostById(post_id) {
 		return this.$Post.put({
 			id: post_id
 		})
 	}
 	deletePost(post_id, cb) {
 		return this.$Post.remove({//not deelte for IE
 			id: post_id
 		}, cb)
 	}
    createPost() {
    return new  this.$Post();
    }
    

 }
 PostService.$inject = ['$resource', '$http'];