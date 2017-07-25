import axios from 'axios';
import config from './api_config';

module.exports = {
	fetchAllPosts: function(){
		var encodedURI = window.encodeURI(`http://${config.api_host}:3038/api/posts`);
		return axios.get(encodedURI)
			.then(function(response){
				return response.data;
			});
	},
	fetchPostById: function(postId){
		var encodedURI = window.encodeURI(`http://${config.api_host}:3038/api/posts/${postId}`);
		return axios.get(encodedURI)
			.then(function(response){
				return response.data;
			});	
	},
	createNewPost: function(postData){
		var encodedURI = window.encodeURI(`http://${config.api_host}:3038/api/posts`);
		return axios.post(encodedURI, postData)
			.then(function(response){
				return response.data;
			});		
	},
	updateCurrentPost: function(id, postData){
		var encodedURI = window.encodeURI(`http://${config.api_host}:3038/api/posts/${id}`);
		return axios.put(encodedURI, postData)
			.then(function(response){
				return response.data;
			});			
	}
}