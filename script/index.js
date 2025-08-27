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

    if (coinIcon > 0) {
      alert(cardName + ': ' + cardNumber);

      // call history start
      let time = new Date().toLocaleTimeString();
      const newDiv = getId('new-div');
      const createDiv = document.createElement('div');
      createDiv.innerHTML = `
        <div class="rounded-lg bg-[#fafafa] p-3 my-5 flex justify-between items-center ">
            <div>
                <h4 class="font-bold">${cardName}</h4>
                <p>${cardNumber}</p>
            </div>
            <p>${time}</p>
        </div>
    `;
      newDiv.appendChild(createDiv);
      // call history end

      coinIcon = coinIcon - 20;
      getId('coin-icon').innerText = coinIcon;
    } else {
      alert(
        "❌ You don't have enough coins. You need at least 20 coins to make a call."
      );
      getId('coin-icon').innerText = 0;
      return;
    }
  }
});

// clear btn
document.getElementById('clear-btn').addEventListener('click', function () {
  const newDivs = getId('new-div');
  console.log(newDivs);
  newDivs.innerHTML = ' ';
});
