//해당 가게의 메뉴정보를 불러온다.
function getMenus(storeId) {
  
  var storeId = localStorage.getItem('storeId');
    $.ajax({
      url: 'http://127.0.0.1:8080/menu'+ storeId,
      type: 'GET',
      success: function(data) {
        var menuCard = document.getElementById('menu-container');
        var menus = data.menus;
        var length = menus.length;
  
        for (var i = 0; i < length; i++) {
          var menu = menus[i];
          var card = document.createElement('div');
          card.className = 'card';
          card.style.width = '18rem';
  
          var img = document.createElement('img');
          img.className = 'bd-placeholder-img card-img-top';
          img.setAttribute('width', '100%');
          img.setAttribute('height','180%');
          img.setAttribute('src', menu.menu_img);
  
          var cardBody = document.createElement('div');
          cardBody.className = 'card-body';
  
          var title = document.createElement('h3');
          title.className = 'card-title';
          title.innerText = menu.menu_name;
  
          var price = document.createElement('p');
          price.className = 'card-text';
          price.innerText = menu.price;
  
          cardBody.appendChild(title);
          cardBody.appendChild(price);
          card.appendChild(img);
          card.appendChild(cardBody);
  
          menuCard.appendChild(card);
        }
      },
      error: function() {
        console.log('에러발생');
      }
    });
  }
  
  $(document).ready(function() {
    getMenus();
  });
  
  

  //메뉴 정보를 등록한다.
  function registerMenu() {
  
    var inputMenu = document.getElementById('#input_menu').val;
    var inputPrice = document.getElementById('#name_input').val;
    $.ajax({
      url: 'http://127.0.0.1:8080/menu/register',
      type: 'POST',
      data: JSON.stringify({
        'menu_name': inputMenu,
        'price': inputPrice,
        'menu_img': 'menu_img'
      }),
      contentType: 'application/json',
      success: function(response) {
        console.log(response);
      },
      error: function(error) {
        console.log(error);
      }
    });
  }
  $("#resister_button").click(function() {
    resisterMenu();
  });
  


  //메뉴정보를 불러온다.
  function get_detail_Menus(menuId) {
    $.ajax({
      url: 'http://127.0.0.1:8080/menu'+ menuId,
      type: 'GET',
      success: function(response) {
  
        console.log('메뉴 정보 불러옴!');
        location.reload()
        location.href = "http://127.0.0.1:8080/menu/detail"+menuId; 
      },
      error: function() {
        console.log('에러 발생');
      }
    });
  }
  
  $(document).ready(function() {
    getMenus();
  });

  //메뉴정보 수정한다.
  function completeNewPost() {
    var formData = new FormData();
    formData.append('menu', $('#menu').val());
    formData.append('price', $('#price').val());
    formData.append('menu_img', $('#menu_ing_link').val());

    $.ajax({
      type: 'PUT', 
      url: '받을 url',
      contentType: 'application/json',
      data: JSON.stringify({
        'menu_name': menu_name,
        'price': price,
        'menu_img': menu_img
      }),
      success: function(data) {
        alert('메뉴수정 완료');
        location.href = "/menu.html"; 
      },
      error: function() {
        alert('메뉴수정 실패');
      }
    });
  }
  function completePost_cbv(){
    $("#form_submit").trigger("click")
}

  //메뉴 정보를 삭제한다.
  function deleteMenu() {
    var menuId = localStorage.getItem('menuId');
  
    $.ajax({
      type: 'DELETE',
      url: `http://127.0.0.1:8000/post/delete/${menuId}/`,
      headers: {
        'Authorization': 'AccessToken',
        'Refresh-Token': 'RefreshToken',
      },
      success: function(data) {
        alert('삭제 성공');
        $("#" + menuId).remove();
        location.href = '/post/list/cbv/';
      },
      error: function(xhr) {
        if (xhr.status === 401) {
          var errorMessage = JSON.parse(xhr.responseText).message;
          alert('삭제 실패: ' + errorMessage);
        } else {
          alert('삭제 실패');
        }
      }
    });
  }
  