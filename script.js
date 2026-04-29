
const apiUrl =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,solana&vs_currencies=usd";

async function loadCryptoPrices() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const btc = "$" + data.bitcoin.usd.toLocaleString();
    const eth = "$" + data.ethereum.usd.toLocaleString();
    const bnb = "$" + data.binancecoin.usd.toLocaleString();
    const sol = "$" + data.solana.usd.toLocaleString();

    updateText("btc-price", btc);
    updateText("eth-price", eth);
    updateText("bnb-price", bnb);

    updateText("dash-btc", btc);
    updateText("dash-eth", eth);
    updateText("dash-bnb", bnb);
    updateText("dash-sol", sol);

  } catch (error) {
    console.log("Crypto price error:", error);
  }
}

function updateText(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
}

loadCryptoPrices();
setInterval(loadCryptoPrices, 30000);
