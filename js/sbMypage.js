// img 클릭됬을 때 함수
function handleImgClick3(data) {
  var num = data.id.substring(data.id.length - 1);
  var input = document.getElementById(`input_sbMypage_mypage_img_${num}`);
  input.click();
}

//input 클릭됬을 때 함수
function readURL3(input) {
  var num = input.id.substring(input.id.length - 1);
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById(`sbMypage_mypage_img_${num}`).src =
        e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    document.getElementById(`sbMypage_mypage_img_${num}`).src = "";
  }
}

// img 클릭됬을 때 함수
function handleImgClick4(data) {
  var num = data.id.substring(data.id.length - 1);
  var input = document.getElementById(`input_sbMypage_store_img_${num}`);
  input.click();
}

//input 클릭됬을 때 함수
function readURL4(input) {
  var num = input.id.substring(input.id.length - 1);
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById(`sbMypage_store_img_${num}`).src =
        e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    document.getElementById(`sbMypage_store_img_${num}`).src = "";
  }
}
