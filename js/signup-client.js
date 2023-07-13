
function signupClient(event){
  event.preventDefault();

    var grantType = localStorage.getItem('grantType');
    var accessToken = localStorage.getItem('accessToken');
    var refreshToken = localStorage.getItem('refreshToken');

    var userId = $('#userId').val();
    var userPw = $('#userPw').val();
    var name = $('#clientName').val();
    var storeName = $('#storeName').val();
    var storeAddr = $('#address-1').val() + ' ' + $('#address-2').val();
    var regNum = $('#regNum').val();

    $.ajax({
        type: 'POST',
        url: '/api/signup/client',
        contentType : 'application/json',
        headers: {
            'Authorization': grantType + ' ' + accessToken,
            'Refresh': refreshToken
        },
        data: JSON.stringify({
          "id" : userId,
          "pw" : userPw,
          "name" : name,
          "storeName" : storeName,
          "storeAddr" : storeAddr,
          "regNum" : regNum
        }),
        success : function(data){
          alert('회원가입이 완료되었습니다.');
          location.href="/api/login";
        },
        error: function(request, status, error){
          console.log(userId, userPw, name, storeName, storeAddr, regNum);
          alert('회원가입에 실패하였습니다.');
        }
    })
}