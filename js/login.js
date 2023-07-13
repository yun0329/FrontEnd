function login(){
    $.ajax({
        type: 'POST',
        url: '/api/login',
        contentType: 'application/json',
       
        data: JSON.stringify({
            'userId' : id,
            'userPw' : pw
        }),
        success : function(data){
            localStorage.setItem('grantType', data.grantType);
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);
            alert('로그인에 성공했습니다.');
        },
        error: function(request, status, error){
            alert('로그인에 실패했습니다.');
        }
    })
}
