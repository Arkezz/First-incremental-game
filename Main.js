var gameData = {
    cookies: 0,
    cookiesPerClick: 1,
    cookiesPerClickCost: 10,
    lastTick: Date.now(),
    update: 0.1
}

function update(id, content) {
    document.getElementById(id).innerHTML = content;
}

function clickCookie() {
    gameData.cookies += gameData.cookiesPerClick
    update("cookiesClicked", gameData.cookies + "Cookies Clicked")
}

function buyCookiesPerClick() {
    if(gameData.cookies >= gameData.cookiesPerClickCost) {
        gameData.cookies -= gameData.cookiesPerClickCost
        gameData.cookiesPerClick += 1
        gameData.cookiesPerClickCost *= 2
        update("cookiesClicked", gameData.cookies + " Cookies Clicked")
        update("perClickUpgrade", "Upgrade Finger (currently level " + gameData.cookiesPerClick +") Cost: " + gameData.cookiesPerClickCost + " Gold")
    }
}
var mainGameLoop = window.setInterval(function() {
    diff= Date.now() - gameData.lastTick();
    gameData.lastTick = date.now()
    gameData.cookie += gameData.cookiesPerClick * (diff / 1000)
    update("cookiesClicked", gameData.cookies + " Cookies Clicked")
}, 1000)

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("cookieClickerSave", JSON.stringify(gameData))
}, 15000)

var saveGame = JSON.parse(localStorage.getItem("cookieClickerSave"))
if(savegame != null) {
    gameData = savegame
}

function tab(tab) {
    document.getElementById("clickCookiesMenu").style.display = "none"
    document.getElementById("shopMenu").style.display = "none"
    document.getElementById(tab).style.display = "inline-block"

}  
tab("clickCookiesMenu")

function format(number, type) {
	let exponent = Math.floor(Math.log10(number))
	let mantissa = number / Math.pow(10, exponent)
	if (exponent < 3) return number.toFixed(1)
	if (type == "scientific") return mantissa.toFixed(2) + "e" + exponent
	if (type == "engineering") return (Math.pow(10, exponent % 3) * mantissa).toFixed(2) + "e" + (Math.floor(exponent / 3) * 3)
}


if (typeof saveGame.cookie !== "undefined") gameData.gold = saveGame.gold;
if (typeof saveGame.cookiesPerClick !== "undefined") gameData.goldPerClick = saveGame.goldPerClick;
if (typeof saveGame.cookiesPerClickCost !== "undefined") gameData.goldPerClickCost = saveGame.goldPerClickCost;
if (typeof saveGame.lastTick !== "undefined") gameData.lastTick = saveGame.lastTick;