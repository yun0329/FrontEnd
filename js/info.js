function toggleUserPanel() {
    var userPanel = document.getElementById("userPanel");
    if (userPanel.style.display === "none") {
        userPanel.style.display = "block";
    } else {
        userPanel.style.display = "none";
    }
}

// AJAX 

function info(){
	$.ajax({
		url: '/api/info',
		type: 'GET',
		success: function(data){
			var menuCard = document.getElementById('menu_card');
			var menus = data.menus;
			var length = menus.length;
		
			// 메뉴가 2개면 2번 반복, 3개면 3번 반복 요런 너낌 !!!
			for(var i = 0; i < length; i++){
				var menu = menus[0];
	
				var card = document.createElement('div');
				card.className = 'card';
				card.style = "width: 18rem;";
	
				var img = document.createElement('img');
				img.className = 'bd-placeholder-img card-img-top';
				img.setAttribute('width', '100%');
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
			}}, error: function(){
					console.log('에러발생 ㅜㅜ');
			}
	})
}

$(document).ready(function(){
	getMenus();
});