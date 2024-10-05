let name = prompt("Как тебя зовут?");
let age = prompt("Сколько тебe лет?");
if (age < 20) {
    alert("Тебе меньше 20");
} else if (age > 20) {
    for (let index = 0; index < 5; index++) {
        alert("hello")
    }
}

let js = confirm("Хочешь учить js?");
if (js) {
    alert("Супер");
}