function logout(){
    var grantType = localStorage.getItem('grantType');
    var accessToken = localStorage.getItem('accessToken');
    var refreshToken = localStorage.getItem('refreshToken');

    $.ajax({
        type: 'POST',
        url: '/api/logout',
        contentType: 'application/json',
        headers: {
            'Authorization': grantType + ' ' + accessToken,
            'Refresh': refreshToken
          },
        
        success : function(data){
          alert('로그아웃 성공');
        },
        error: function(request, status, error){
          alert('로그아웃 실패');
        }
    })
}