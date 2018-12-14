function makeMoney() {
  let wirecost = document.querySelector("#wireCost");
  let wirelength = document.querySelector("#wire");
  setInterval(() => {
    clipClick(1);
    if (wirecost.innerHTML < 21 && wirelength.innerHTML < 20000) {
      buyWire();
    }
  }, 1);
}
