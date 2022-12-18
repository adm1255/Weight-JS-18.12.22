var height = prompt("Пожалуйста укажите ваш рост?")
var weight = prompt("Пожалуйста укажите ваш вес?")

var body = weight / (height*height)
var doyou = body > 28

alert("У вас есть лишний вес:" + " " + doyou)