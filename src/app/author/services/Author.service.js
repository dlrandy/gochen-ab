 export default class AuthorService{
	constructor($resource, $http){
		this.$http = $http;
		this.$Author = $resource('/api/authors/:id',{id:'@id'}, {
    update: {
      method: 'PUT' // this method issues a PUT request
    }
  });
	}
 	getAuthorList(cb) {
 		return this.$Author.query(cb);
 	}
 	getAuthorById(user_id, cb) {
 		return this.$Author.get({
 			id: user_id
 		}, cb)
 	}
 	putAuthorById(user, cb) {
 		return this.$Author.$update(user,cb)
 	}
 	deleteAuthor(user_id, cb) {
 		return this.$Author.remove({//not deelte for IE
 			id: user_id
 		}, cb)
 	}
    createAuthor(newAuthor, cb) {
    // return this.$Author.save(newAuthor,cb) 
	return new this.$Author()
    }
    

 }