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
    $("div").remove(".inputWrapper");
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
  url: `${서버주소}/api/store`,
  contentType: "application/json",
  headers: {
    Authorization: grantType + " " + accessToken,
    Refresh: refreshToken,
  },
  success: function (data) {
    $("#address_input1").val(data.store_addr);
    $("#registration_number").val(data.reg_num);
    $("#store_img_1").attr("src", data.store_img);
  },
  error: function () {
    alert("소상공인 회원 등록자가 아닙니다.");
  },
});

$.ajax({
  type: "PUT",
  url: `${서버주소}/api/store`,
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

$.ajax({
  type: "DELETE",
  url: `${서버주소}/api/store`,
  contentType: "application/json",
  headers: {
    Authorization: grantType + " " + accessToken,
    Refresh: refreshToken,
  },
  success: function (data) {
    alert("수정 완료되었습니다.");
    location.href = "/sbMypage.html";
  },
  error: function () {
    alert("소상공인 회원 등록자가 아닙니다.");
  },
});
