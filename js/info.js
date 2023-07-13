
function info(){
	var grantType = localStorage.getItem('grantType');
    var accessToken = localStorage.getItem('accessToken');
    var refreshToken = localStorage.getItem('refreshToken');

	

	$.ajax({
		type: 'GET',
		url: 'http://127.0.0.1:8080/info',
		headers: {
            'Authorization': grantType + ' ' + accessToken,
            'Refresh': refreshToken
        },

		success: function(data){
			var userId = data.userId;
            var email = data.email;
            var image = data.image;
            var visitedStores = data.visitedStores;
            var coupons = data.coupons;
            var reviews = data.reviews;
			
			
		},
		error: function(request, status, error){
            alert('error');
        }
	})
}
