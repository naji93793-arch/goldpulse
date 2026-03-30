// Bitcoin
function getBTC() {
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
    .then(res => res.json())
    .then(data => {
        document.getElementById("btc").innerText = data.bitcoin.usd + " $";
    });
}

// USD to EGP
function getUSD() {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
    .then(res => res.json())
    .then(data => {
        document.getElementById("usd").innerText = data.rates.EGP + " EGP";
    });
}

// Fake gold (هنظبطه بعدين API حقيقي)
function getGold() {
    document.getElementById("gold").innerText = "Soon...";
}

// تشغيل
function updateAll() {
    getBTC();
    getUSD();
    getGold();
}

// تحديث كل 30 ثانية
setInterval(updateAll, 30000);

// تشغيل أول مرة
updateAll();