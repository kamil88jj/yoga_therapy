


let age = document.getElementById('age');

function showUser(surname, name) {
(`Пользователь ${surname} ${name}  лет `    + this.value);
}

showUser.apply(age, [' дон ', ' дигидон ']);



