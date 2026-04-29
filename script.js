function showMessage() {
  alert("Welcome to Exalt Trader 🚀");
}

async function loadPrices() {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd"
    );

    const data = await res.json();

    document.getElementById("btc").innerText =
      "Bitcoin: $" + data.bitcoin.usd;

    document.getElementById("eth").innerText =
      "Ethereum: $" + data.ethereum.usd;

  } catch (err) {
    document.getElementById("btc").innerText = "Error loading price";
    document.getElementById("eth").innerText = "Error loading price";
  }
}

loadPrices();
