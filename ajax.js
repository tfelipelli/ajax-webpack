// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         var dados = JSON.parse(xhttp.responseText);
//         document.getElementById("demo").innerHTML = dados.login;
//     }
// };

var url = "https://api.github.com/users/octocat";
// xhttp.open("GET", url, true);
// xhttp.send();

fetch(url)
    .then(response => response.json())
    .then(result => {
        const dados = JSON.stringify(result);
        document.getElementById("demo").innerHTML = dados;
    })