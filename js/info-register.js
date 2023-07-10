// 가게 사진 업로드

function getImageFiles(e) {
  const uploadFiles = [];
  const files = e.currentTarget.files;
  const imagePreview = document.querySelector('.storeImg-preview');
  const docFrag = new DocumentFragment();

  if (files.length > 3) {
    alert('이미지는 최대 3개까지 업로드 가능합니다.');
    return;
  }

  for (let i = 0; i < files.length && i < 3; i++) {
    const file = files[i];

    if (!file.type.match("image/.*")) {
      alert('이미지 파일만 업로드 가능합니다.');
      return;
    }

    uploadFiles.push(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      const preview = createElement(e, file);
      imagePreview.appendChild(preview);
    };
    reader.readAsDataURL(file);
  }
}



function createElement(e, file) {
  const li = document.createElement('li');
  const img = document.createElement('img');
  img.setAttribute('src', e.target.result);
  img.setAttribute('data-file', file.name);
  li.appendChild(img);

  return li;
}

const realUpload = document.querySelector('.store-real-upload');
const upload = document.querySelector('.store-upload');

upload.addEventListener('click', () => realUpload.click());

realUpload.addEventListener('change', getImageFiles);


// 메뉴 사진 업로드
function makeImageFiles(e) {
  const uploadFiles = [];
  const files = e.currentTarget.files;
  const imagePreview = document.querySelector('.menuImg-preview');
  const docFrag = new DocumentFragment();

  if (files.length > 3) {
    alert('이미지는 최대 3개까지 업로드 가능합니다.');
    return;
  }

  for (let i = 0; i < files.length && i < 3; i++) {
    const file = files[i];

    if (!file.type.match("image/.*")) {
      alert('이미지 파일만 업로드 가능합니다.');
      return;
    }

    uploadFiles.push(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      const preview = createElement(e, file);
      imagePreview.appendChild(preview);
    };
    reader.readAsDataURL(file);
  }
}



function makeElement(e, file) {
  const li = document.makeElement('li');
  const img = document.makeElement('img');
  img.setAttribute('src', e.target.result);
  img.setAttribute('data-file', file.name);
  li.appendChild(img);

  return li;
}

const menuRealUpload = document.querySelector('.menu-real-upload');
const menuUpload = document.querySelector('.menu-upload');

menuUpload.addEventListener('click', () => menuRealUpload.click());

menuRealUpload.addEventListener('change', makeImageFiles);