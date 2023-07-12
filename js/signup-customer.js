
function signup(){
    var grantType = localStorage.getItem('grantType');
    var accessToken = localStorage.getItem('accessToken');
    var refreshToken = localStorage.getItem('refreshToken');

    $.ajax({
        type: 'POST',
        url: '/api/signup/customer',
        contentType : 'application/json',
        headers: {
            'Authorization': grantType + ' ' + accessToken,
            'Refresh': refreshToken
        },
        data: JSON.stringify({
            'userId' : id,
            'userPw' : pw,
            'email' : email
        }),
        success : function(data){
          alert('Success');
        },
        error: function(request, status, error){
          alert('Error');
        }
    })
}