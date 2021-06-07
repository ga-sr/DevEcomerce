window.onload = function() {
    let dados = sessionStorage.getItem('@carList');
    //console.log(dados, 'dados');
    let list = document.querySelector('#list');
    //console.log(list);
    var dataOb = JSON.parse(dados);
    //console.log(dataOb, 'dataob');

    dataOb.forEach((element) => {
        const item = document.createElement('li');
        item.classList.add('card-rounded', 'small');

        const div = document.createElement('div');
        div.classList.add('card-content', 'small');

        const divCategory = document.createElement('h1');
        divCategory.classList.add('category', 'small');
        divCategory.innerHTML = element.category;

        const img = document.createElement('img');
        img.classList.add('avatar-client', 'small');
        img.src = element.url;

        const pname = document.createElement('p');
        pname.classList.add('client-name', 'small');
        pname.innerText = element.name;

        const pcat = document.createElement('p');
        pcat.classList.add('client-cat');
        pcat.innerText = element.categoryLabel;

        const pcity = document.createElement('p');
        pcity.classList.add('client-city', 'small');
        pcity.innerText = element.price;

        const pdesposition = document.createElement('p');
        pdesposition.classList.add('client-desposition', 'small');
        pdesposition.innerText = element.description;

        item.appendChild(div);
        div.appendChild(divCategory);
        div.appendChild(img);
        div.appendChild(pname);
        div.appendChild(pcat);
        div.appendChild(pcity);
        div.appendChild(pdesposition);

        list.appendChild(item);
    })

    var teste = document.getElementById('finalizar');
    teste.addEventListener('click',
        function(e) {
            sessionStorage.setItem('data', JSON.stringify(dataOb));
        })
}