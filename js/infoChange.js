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

// img 클릭됬을 때 함수
function handleImgClick2(data) {
  var num = data.id.substring(data.id.length - 1);
  var input = document.getElementById(`input_menu_img_${num}`);
  input.click();
}

//input 클릭됬을 때 함수
function readURL2(input) {
  var num = input.id.substring(input.id.length - 1);
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById(`menu_img_${num}`).src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    document.getElementById(`menu_img_${num}`).src = "";
  }
}

// Attach the event listener to the checkbox
var uploadCheckbox = document.getElementById("uploadCheckbox");
uploadCheckbox.addEventListener("change", handleImageUpload);

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
