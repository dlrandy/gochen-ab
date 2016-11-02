 export default class AuthorService{
	constructor($resource, $http){
		this.$http = $http;
		this.$Author = $resource('/api/authors/:id',{id:'@id'});
	}
 	getAuthorList() {
 		return this.$Author.query((result)=>{
 			return result;
 		})
 	}
 	getAuthorById(user_id) {
 		return this.$Author.get({
 			id: user_id
 		}, (result) => {
 			return  result;
 		})
 	}
 	putAuthorById(user_id) {
 		return this.$Author.put({
 			id: user_id
 		}, (result) => {
 			return  result;
 		})
 	}
 	deleteAuthor(user_id) {
 		return this.$Author.remove({//not deelte for IE
 			id: user_id
 		}, (result) => {
 			return  result;
 		})
 	}
    createAuthor() {
    return this.$Author.save({
 			id: user_id
 		}, (result) => {
 			return  result;
 		}) 
    }
    

 }