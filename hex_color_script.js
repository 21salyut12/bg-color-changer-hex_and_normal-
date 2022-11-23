const hexColorBtn = document.getElementById("colorBtn")
const hexColorArr = ["#044389", "#FCFF4B", "#FFAD05", "#7CAFC4", "#5995ED"]

hexColorBtn.addEventListener("click", () => {
    i = Math.floor(Math.random() * hexColorArr.length)
    document.querySelector("h1").textContent = `HEX Value: ${hexColorArr[i]}`
    document.getElementById("body").style.backgroundColor = hexColorArr[i]
})