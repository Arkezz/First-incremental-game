var gameData = {
    Cookies: 0,
    cookiesPerClick: 1,
    goldPerClickCost: 10,
    update: 0.1
}

function clickCookie() {
    gameData.Cookies += gameData.cookiesPerClick
    document.getElementById("cookiesClicked").innerHTML = gameData.Cookies + "Cookies Clicked"
}

function buyCookiesPerClick() {
    if(gameData.Cookies >= gameData.cookiesPerClickCost) {
        gameData.Cookies -= gameData.cookiesPerClickCost
        gameData.cookiesPerClick += 1
        gameData.cookiesPerClickCost *= 2
        document.getElementById("cookiesClicked").innerHTML = gameData.Cookies + "cookiesClicked"
        document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pickaxe (currently level " + gameData.cookiesPerClick +") Cost: " + gameData.cookiesPerClickCost + " Gold"
    }
}
var mainGameLoop = window.setInterval(function() {
    clickCookie()
}, 1000)

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("cookieClickerSave", JSON.stringify(gameData))
}, 15000)

var saveGame = JSON.parse(localStorage.getItem("cookieClickerSave"))
if(savegame != null) {
    gameData = savegame
}