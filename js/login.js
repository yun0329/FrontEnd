function loginBtnClick(event){
    event.preventDefault();
    var userId = $('#userId').val();
    var userPw = $('#userPw').val();

    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:8080/login',
        contentType: 'application/json',
       
        data: JSON.stringify({
            'id' : userId,
            'pw' : userPw,
        }),
        success : function(data){
            localStorage.setItem('grantType', data.grantType);
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);
            alert('로그인에 성공했습니다.');
            location.href="http://127.0.0.1:8080/list?size={8}&page={0}";
        },
        error: function(request, status, error){
            alert('로그인에 실패했습니다.');
        }
    })
}
