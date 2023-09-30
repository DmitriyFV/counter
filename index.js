let buttonPlus = document.getElementById("plus")
let buttonMinus = document.getElementById("minus")
let result = document.getElementById("result")
result.value = 0
function increase () {
    result.value = Number(result.value) + 1
}
function decrease () {
    result.value = result.value - 1
}
buttonPlus.onclick = increase
buttonMinus.onclick = decrease