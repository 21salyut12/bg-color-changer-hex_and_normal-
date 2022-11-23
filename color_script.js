const btnColor = document.getElementById("colorBtn")
const colorArr = ["salmon", "yellow", "blue", "orange", "purple"]


btnColor.addEventListener("click", () => {
    index = Math.floor(Math.random() * colorArr.length)
    document.getElementById("body").style.backgroundColor = colorArr[index] // this should go into the loop and use Math.random()
})