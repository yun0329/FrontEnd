// img 클릭됬을 때 함수
function handleImgClick5(data) {
  var num = data.id.substring(data.id.length - 1);
  var input = document.getElementById(`input_sbAllReview_img_${num}`);
  input.click();
}

//input 클릭됬을 때 함수
function readURL5(input) {
  var num = input.id.substring(input.id.length - 1);
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById(`sbAllReview_img_${num}`).src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    document.getElementById(`sbAllReview_img_${num}`).src = "";
  }
}
