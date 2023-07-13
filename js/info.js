// AJAX 

function info(){
	var storeId = localStorage.getItem('storeId')

	$.ajax({
		url: '/api/info',
		type: 'GET',
		success: function(data){
			
		}
		
	})
}

$(document).ready(function(){
	getMenus();
});