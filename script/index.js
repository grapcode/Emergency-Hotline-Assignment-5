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
    let coinIcon = parseFloat(getId('coin-icon').innerText);
    coinIcon = coinIcon - 20;
    getId('coin-icon').innerText = coinIcon;
    if (coinIcon > 20) {
      alert(cardName + ': ' + cardNumber);
    }
    if (coinIcon < 20) {
      alert('❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।');
    }
    console.log(cardName, cardNumber, coinIcon);
  }
});
