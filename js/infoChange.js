// img 클릭됬을 때 함수
function handleImgClick(data) {
  var num = data.id.substring(data.id.length - 1);
  var input = document.getElementById(`input_store_img_${num}`);
  input.click();
}

//input 클릭됬을 때 함수
function readURL(input) {
  var num = input.id.substring(input.id.length - 1);
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById(`store_img_${num}`).src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    document.getElementById(`store_img_${num}`).src = "";
  }
}

  //메뉴정보 수정한다.
  function completeNewPost() {
    var menuId = 1;
    var menu_name = $('#menu').val();
    var price = $('#price').val();
    var menu_img = $('#menu_img_link').val();

    $.ajax({
      type: 'PUT', 
      url: 'http://127.0.0.1:8080/menu/'+ menuId,
      contentType: 'application/json',
      headers: {
        "Authorization": "Access-Token",
        "Refresh": "Refresh-Token"
      },
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
      url: 'http://127.0.0.1:8000/post/delete/' + menuId,
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

// // img 클릭됬을 때 함수
// function handleImgClick2(data) {
//   var num = data.id.substring(data.id.length - 1);
//   var input = document.getElementById(`input_menu_img_${num}`);
//   input.click();
// }

// //input 클릭됬을 때 함수
// function readURL2(input) {
//   var num = input.id.substring(input.id.length - 1);
//   if (input.files && input.files[0]) {
//     var reader = new FileReader();
//     reader.onload = function (e) {
//       document.getElementById(`menu_img_${num}`).src = e.target.result;
//     };
//     reader.readAsDataURL(input.files[0]);
//   } else {
//     document.getElementById(`menu_img_${num}`).src = "";
//   }
// }
function displayImage(input) {
  var previewImage = input.nextElementSibling;
  var file = input.files[0];
  var reader = new FileReader();

  reader.onload = function (event) {
    previewImage.src = event.target.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    previewImage.src = "#";
  }
}

function addInputColumn() {
  var inputWrapper = document.createElement("div");
  inputWrapper.classList.add("inputWrapper");

  var photoInput = document.createElement("input");
  photoInput.type = "file";
  photoInput.name = "photo[]";
  photoInput.accept = "image/*";
  photoInput.onchange = function () {
    displayImage(this);
  };

  var previewImage = document.createElement("img");
  previewImage.classList.add("previewImage");
  previewImage.src = "./img/menu_basic_img.png";
  previewImage.alt = "Preview";
  previewImage.setAttribute("width", "300px");
  previewImage.setAttribute("height", "150px");

  var menuInput = document.createElement("input");
  menuInput.type = "text";
  menuInput.name = "menu[]";
  menuInput.placeholder = "메뉴를 입력하세요";

  var priceInput = document.createElement("input");
  priceInput.type = "text";
  priceInput.name = "price[]";
  priceInput.placeholder = "가격을 입력하세요";

  inputWrapper.appendChild(photoInput);
  inputWrapper.appendChild(previewImage);
  inputWrapper.appendChild(menuInput);
  inputWrapper.appendChild(priceInput);

  var inputsContainer = document.getElementById("inputsContainer");
  inputsContainer.appendChild(inputWrapper);
}

$(document).ready(function () {
  $("#removeButton").click(function () {
    $("div").remove(".inputWrapper:last-child");
  });
});

function openAddressPopup() {
  new daum.Postcode({
    oncomplete: function (data) {
      var roadAddr = data.roadAddress; // 도로명 주소 변수
      var extraRoadAddr = ""; // 참고 항목 변수

      if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
        extraRoadAddr += data.bname;
      }
      if (data.buildingName !== "" && data.apartment === "Y") {
        extraRoadAddr +=
          extraRoadAddr !== "" ? ", " + data.buildingName : data.buildingName;
      }
      if (extraRoadAddr !== "") {
        extraRoadAddr = " (" + extraRoadAddr + ")";
      }

      document.getElementById("postalCode").value = data.zonecode;
      document.getElementById("address_input1").value =
        roadAddr + extraRoadAddr;
    },
  }).open();
}

var grantType = localStorage.getItem("grantType");
var accessToken = localStorage.getItem("accessToken");
var refreshToken = localStorage.getItem("refreshToken");

$.ajax({
  type: "GET",
  url: `http://127.0.0.1:8080/api/store`,
  contentType: "application/json",
  headers: {
    Authorization: grantType + " " + accessToken,
    Refresh: refreshToken,
  },
  success: function (data) {
    $("#address_input1").val(data.storeAddr);
    $("#registration_number").val(data.regNum);
    $("#store_introduction").val(data.storeIntro);
    $("#store_img_1").attr("src", data.storeImg);
    $("#certification_number").val(data.certificationNum);
  },
  error: function () {
    alert("소상공인 회원 등록자가 아닙니다.");
  },
});

$(document).ready(function () {
  $.ajax({
    type: "PUT",
    url: `http://127.0.0.1:8080/api/store`,
    contentType: "application/json",
    headers: {
      Authorization: grantType + " " + accessToken,
      Refresh: refreshToken,
    },
    data: JSON.stringify({
      store_intro: "store_intro",
      store_img: "store_img_link",
      certification_num: 1234,
    }),
    success: function (data) {
      alert("수정 완료되었습니다.");
      location.href = "/sbMypage.html";
    },
    error: function () {
      alert("소상공인 회원 등록자가 아닙니다.");
    },
  });
});
