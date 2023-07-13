// img 클릭됬을 때 함수
function handleImgClick(data) {
  var num = data.id.substring(data.id.length - 1);
  var input = document.getElementById(`input_store1_img_${num}`);
  input.click();
}

//input 클릭됬을 때 함수
function readURL(input) {
  var num = input.id.substring(input.id.length - 1);
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById(`store1_img_${num}`).src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    document.getElementById(`store1_img_${num}`).src = "";
  }
}

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

  var inputsContainer = document.getElementById("inputsContainer1");
  inputsContainer.appendChild(inputWrapper);
}

$(document).ready(function () {
  $("#removeButton1").click(function () {
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

      document.getElementById("postalCode1").value = data.zonecode;
      document.getElementById("address_input3").value =
        roadAddr + extraRoadAddr;
    },
  }).open();
}

// 버튼 클릭 시 옵션바 추가
function addOptionBar() {
  var selectContainer = document.querySelector(".new_select");

  // 새로운 옵션바 요소 생성
  var newOptionBar = document.createElement("div");
  newOptionBar.className = "select";

  // 첫 번째 선택 옵션 추가
  var daySelect = document.createElement("select");
  daySelect.id = "day-select1";
  var dayOption = document.createElement("option");
  dayOption.value = "";
  dayOption.disabled = true;
  dayOption.selected = true;
  dayOption.appendChild(document.createTextNode("요일"));
  daySelect.appendChild(dayOption);

  // 요일 옵션 추가
  var days = [
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
    "일요일",
  ];
  for (var i = 0; i < days.length; i++) {
    var option = document.createElement("option");
    option.value = days[i];
    option.appendChild(document.createTextNode(days[i]));
    daySelect.appendChild(option);
  }

  // 첫 번째 시간 옵션 추가
  var openTimeSelect = document.createElement("select");
  openTimeSelect.id = "open-time-select1";
  var openTimeOption = document.createElement("option");
  openTimeOption.value = "";
  openTimeOption.disabled = true;
  openTimeOption.selected = true;
  openTimeOption.appendChild(document.createTextNode("오픈시간 시/분"));
  openTimeSelect.appendChild(openTimeOption);

  // 시간 옵션 추가
  var hours = [
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
  ];
  for (var j = 0; j < hours.length; j++) {
    var hourOption = document.createElement("option");
    hourOption.value = hours[j];
    hourOption.appendChild(document.createTextNode(hours[j]));
    openTimeSelect.appendChild(hourOption);
  }

  // 텍스트 노드 추가
  var tilde = document.createElement("p");
  tilde.appendChild(document.createTextNode("~"));

  // 두 번째 시간 옵션 추가
  var closingTimeSelect = document.createElement("select");
  closingTimeSelect.id = "closing-time-select1";
  var closingTimeOption = document.createElement("option");
  closingTimeOption.value = "";
  closingTimeOption.disabled = true;
  closingTimeOption.selected = true;
  closingTimeOption.appendChild(document.createTextNode("마감시간 시/분"));
  closingTimeSelect.appendChild(closingTimeOption);

  // 시간 옵션 추가
  var closingHours = [
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "24:00",
  ];
  for (var k = 0; k < closingHours.length; k++) {
    var closingHourOption = document.createElement("option");
    closingHourOption.value = closingHours[k];
    closingHourOption.appendChild(document.createTextNode(closingHours[k]));
    closingTimeSelect.appendChild(closingHourOption);
  }

  // 새로운 옵션바 요소를 기존 컨테이너에 추가
  newOptionBar.appendChild(daySelect);
  newOptionBar.appendChild(openTimeSelect);
  newOptionBar.appendChild(tilde);
  newOptionBar.appendChild(closingTimeSelect);
  selectContainer.appendChild(newOptionBar);
}

// 버튼 클릭 시 옵션바 삭제
function removeOptionBar() {
  var selectContainer = document.querySelector(".new_select");
  var optionBars = selectContainer.getElementsByClassName("select");

  // 마지막 옵션바 요소 제거
  if (optionBars.length > 0) {
    selectContainer.removeChild(optionBars[optionBars.length - 1]);
  }
}

var grantType = localStorage.getItem("grantType");
var accessToken = localStorage.getItem("accessToken");
var refreshToken = localStorage.getItem("refreshToken");

// var grantType = localStorage.getItem("grantType");
// var accessToken = localStorage.getItem("accessToken");
// var refreshToken = localStorage.getItem("refreshToken");

// $.ajax({
//   type: "GET",
//   url: `${서버주소}/api/store`,
//   contentType: "application/json",
//   headers: {
//     Authorization: grantType + " " + accessToken,
//     Refresh: refreshToken,
//   },
//   success: function (data) {
//     $("#address-1").val(data.store_addr);
//     $("#registration_number").val(data.reg_num);
//     $(".store-real-upload").attr("src", data.store_img);
//   },
//   error: function () {
//     alert("소상공인 회원 등록자가 아닙니다.");
//   },
// });

// $.ajax({
//   type: "POST",
//   url: `${서버주소}/api/store`,
//   contentType: "application/json",
//   headers: {
//     Authorization: grantType + " " + accessToken,
//     Refresh: refreshToken,
//   },
//   data: JSON.stringify({
//     store_intro: "store_intro",
//     store_img: "store_img_link",
//     certification_num: 1234,
//   }),
//   success: function (data) {
//     alert("등록 완료되었습니다.");
//     location.href = "/sbMypage.html";
//   },
//   error: function () {
//     alert("소상공인 회원 등록자가 아닙니다.");
//   },
// });
