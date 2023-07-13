
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
      url: 'http://127.0.0.1:8080/signup/customer',
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
        location.href="http://127.0.0.1:8080/login";
      },
      error: function(request, status, error){
        alert('회원가입에 실패하였습니다.');
      }
  })
}