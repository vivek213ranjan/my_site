import axios from 'axios';

module.exports = {
	fetchAllPosts: function(){
		var encodedURI = window.encodeURI('http://localhost:3038/api/posts');
		return axios.get(encodedURI)
			.then(function(response){
				return response.data;
			});
	}
}