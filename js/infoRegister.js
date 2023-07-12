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
    $("#address-1").val(data.store_addr);
    $("#registration_number").val(data.reg_num);
    $(".store-real-upload").attr("src", data.store_img);
  },
  error: function () {
    alert("소상공인 회원 등록자가 아닙니다.");
  },
});

$.ajax({
  type: "POST",
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
    alert("등록 완료되었습니다.");
    location.href = "/sbMypage.html";
  },
  error: function () {
    alert("소상공인 회원 등록자가 아닙니다.");
  },
});
