function makeMoney() {
  let wirecost = document.querySelector("#wireCost");
  let wirelength = document.querySelector("#wire");
  setInterval(() => {
    clipClick(1);
    if (
      parseInt(wirecost.innerHTML) < 21 &&
      parseFloat(wirelength.innerHTML.replace(/,/g, "")) < 20000
    ) {
      buyWire();
    }
  }, 1);
}
