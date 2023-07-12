function refresh(){
    var grantType = localStorage.getItem('grantType');
    var accessToken = localStorage.getItem('accessToken');
    var refreshToken = localStorage.getItem('refreshToken');

    $.ajax({
        type: 'GET',
        url: '/api/refresh',
        contentType: 'application/json',
        headers: {
            'Authorization': grantType + ' ' + accessToken,
            'Refresh': refreshToken
          },

        success : function(data){
            localStorage.setItem('grantType', 'accessToken', 'refreshToken');
           alert('success');
        },
        error: function(status){
           alert('권한이 없는 회원의 접근입니다.');
        }
    })
}