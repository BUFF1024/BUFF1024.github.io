let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pic1.png') {
      myImage.setAttribute('src', 'images/pic2.png');
    } else {
      myImage.setAttribute('src', 'images/pic1.png');
    }
}


let myButton = document.querySelector('#qiehuan');
let myButton3 = document.querySelector('#tuichu');
let myHeading = document.querySelector('h1');


function reflash(){
  myHeading.textContent ='这里是莉可丽丝Recoli，欢迎。';
}
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
      reflash;
      return;
    } else {
      let storedName = localStorage.setItem('name', myName);
      myHeading.textContent = storedName+',欢迎来到莉可丽丝咖啡店';
    }
  }


  myButton.onclick = function() {
    setUserName();
  if(!localStorage.getItem('name')) {
    alert('用户名不能为空');
    reflash;
    return;
  } 
  else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName+',欢迎来到莉可丽丝咖啡店';
  }

}
    myButton3.onclick = function() {
      reflash();
    }
 
     