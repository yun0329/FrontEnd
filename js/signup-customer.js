
function signupBtnClick(event){
  event.preventDefault();

    var grantType = localStorage.getItem('grantType');
    var accessToken = localStorage.getItem('accessToken');
    var refreshToken = localStorage.getItem('refreshToken');

    var userId = $('#userId').val();
    var userPw = $('#userPw').val();
    var email = $('#email').val();

    $.ajax({
        type: 'POST',
        url: '/api/signup/customer',
        contentType : 'application/json',
        headers: {
            'Authorization': grantType + ' ' + accessToken,
            'Refresh': refreshToken
        },
        data: JSON.stringify({
            'id' : userId,
            'pw' : userPw,
            'email' : email
        }),
        success : function(data){
          alert('회원가입이 완료되었습니다.');
          location.href="/api/login";
        },
        error: function(request, status, error){
          alert('회원가입에 실패하였습니다.');
        }
    })
}