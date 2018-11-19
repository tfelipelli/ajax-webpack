var url = "http://airbnb.douglasmaia.com/api/properties";

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var dados = JSON.parse(xhttp.responseText);
        //console.log(dados);

        dados.map(function(prop) {
            console.log(prop);

            var template = `
                <div>
                <img src="${prop.photo}"/>
                <h1>${prop.name}</h1>
                <p>${prop.price}</p>
                </div>`


            document.getElementById('demo').innerHTML += template;
        })
    }
};

xhttp.open("GET", url, true);
xhttp.send();