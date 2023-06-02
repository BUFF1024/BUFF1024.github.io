let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pic1.jfif') {
      myImage.setAttribute('src', 'images/pic2.jfif');
    } else {
      myImage.setAttribute('src', 'images/pic1.jfif');
    }
}
