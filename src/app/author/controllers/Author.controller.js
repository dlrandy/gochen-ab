export default class AuthorController {
	constructor($scope, AUTHORSERVICE, authorList) {
		this.name = 'RandyChen ';  
		this.$scope = $scope;
		this.authorService = AUTHORSERVICE;
		this.authorList = authorList;
		this.editAuthor = {};
	}
	delete(id){
		var res = this.authorService.deleteAuthor(id, (res) =>{
		if(res.status=='success'){
			this.authorList.splice(_.findIndex(this.authorList, (author)=> author.id == id ),1);
			this.authorList = [...this.authorList];
			alert('成功删除作者')
		}else{
         alert(res.message||'出错了')                    
		}
		});
	}
	toggleEditor( index, id){
		this.authorService.getAuthorById(id,(res)=>{
			this.editAuthor = res;
		});
	}
	saveEditAuthor(){
		this.authorService.putAuthorById(this.editAuthor,(author)=>{
			 if(author.status=="success"){
             alert('修改成功');   
             }
             else{
                   alert('修改失败');   
             }
		});
	}

}

AuthorController.$inject = ['$scope','AUTHORSERVICE', 'authorList'];