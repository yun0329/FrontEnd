function toggleUserPanel() {
  var userPanel = document.getElementById("userPanel");
  if (userPanel.style.display === "none") {
    userPanel.style.display = "block";
  } else {
    userPanel.style.display = "none";
  }
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
