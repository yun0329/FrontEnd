//해당 가게의 메뉴정보를 불러온다.
function getMenus() {
  
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
    var menuId = 1;

    $.ajax({
      url: 'http://127.0.0.1:8080/menu'+ menuId,
      type: 'GET',
      success: function(response) {
  
        console.log('메뉴 정보 불러옴!');
        location.reload()
        location.href = "http://127.0.0.1:8080/menu/detail" + menuId; 
      },
      error: function() {
        console.log('에러 발생');
      }
    });
  }




  