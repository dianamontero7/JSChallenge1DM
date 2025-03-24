window.onload = function () {
    let userName = prompt("Please enter your name:");

    if (userName) {
        let user = {name: userName};

        localStorage.setItem('user', JSON.stringify(user));

        alert("Welcome, " + userName + "!");
    } else {
        alert (null);
    }
};

let namesArray = [];

for (let i = 1, i <= 7, i++) {
    let name = 
}