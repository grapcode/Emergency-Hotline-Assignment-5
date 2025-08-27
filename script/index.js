// get id by this function
function getId(id) {
  const element = document.getElementById(id);
  return element;
}

// get class by this function
function getClass(clas) {
  const elementCl = document.getElementsByClassName(clas);
  return elementCl;
}

// heart function
const heartBtn = getClass('heart-btn');

for (let heart of heartBtn) {
  heart.addEventListener('click', function () {
    let heartIcon = parseFloat(getId('heart-icon').innerText);
    heartIcon = heartIcon + 1;
    getId('heart-icon').innerText = heartIcon;
  });
}

// call function
getId('card-box').addEventListener('click', function (e) {
  if (e.target.className.includes('call-bd')) {
    const callButton = e.target;
    const cardName = callButton.parentNode.parentNode.children[1].innerText;
    const cardNumber = callButton.parentNode.parentNode.children[3].innerText;
    console.log(cardName, cardNumber);
  }
});
