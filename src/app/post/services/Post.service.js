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
 	getPostById(user_id) {
 		return this.$Post.get({
 			id: user_id
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
 		})
 	}
    createPost() {
    return new  this.$Post()
    }
    

 }
//  PostService.$inject = ['$reosurce', '$http'];