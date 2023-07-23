let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pic1.jpg') {
      myImage.setAttribute('src', 'images/pic2.jpg');
    } else {
      myImage.setAttribute('src', 'images/pic1.jpg');
    }
}
const select = document.querySelector('select');
const para = document.querySelector("#zhuijiatext");

select.addEventListener('change',setcharacter);
function setcharacter(){
  const choice = select.value;
  if(choice === 'qs'){
    para.textContent = '锦木千束很感谢你并向你比了个心~';
    document.getElementById("zhuijiatext").style.backgroundColor="#e23e38";
  }
  else if(choice === 'ln'){
    para.textContent = '泷奈感觉有些不知所措，且羞红了脸';
    document.getElementById("zhuijiatext").style.backgroundColor="#4b62b8";
  }
  else if(choice === 'ht'){
    para.textContent = '胡桃的眼睛盯着她的电脑屏幕，对这一切似乎没有什么反应。但是不久后你收到了银行的大额转入通知短信';
    document.getElementById("zhuijiatext").style.backgroundColor="yellow";
  }
  else{
    para.textContent = '';
  }

}