function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

 function onSubmitSignup(){
     var username = $('#username').val();
     var password = $('#password').val();
     var email=$('#email').val();

     $.ajax({
         type: 'post',
         url: 'https://',
         contentType : 'application/json',
         headers: {
             'X-CSRFToken': getCookie('csrftoken')
         },
         data: JSON.stringify({
          'username' : username,
          'password' : password,
          'email' : email,
         }),
         success : function(data){
          alert('Success');
         },
         error: function(request, status, error){
         }
     })
 }
 document.getElementById('user-photo-input').addEventListener('change', function(event) {
   var input = event.target;
   if (input.files && input.files[0]) {
     var reader = new FileReader();
     reader.onload = function(e) {
       document.getElementById('user-photo-preview').src = e.target.result;
     };
     reader.readAsDataURL(input.files[0]);
   }
   showData();
 });


function toggleUserPanel() {
   var userPanel = document.getElementById("userPanel");
   if (userPanel.style.display === "none") {
       userPanel.style.display = "block";
   } else {
       userPanel.style.display = "none";
   }
}
